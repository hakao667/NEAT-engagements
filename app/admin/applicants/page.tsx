import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export default async function ApplicantsPage() {
  const applicants = await prisma.applicant.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Applicants Management</h2>
        <p className="text-neutral-dark/70 mt-2">View and manage all job applications</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {applicants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Name</th>
                  <th className="text-left py-4 px-6 font-semibold">Position</th>
                  <th className="text-left py-4 px-6 font-semibold">Email</th>
                  <th className="text-left py-4 px-6 font-semibold">Phone</th>
                  <th className="text-left py-4 px-6 font-semibold">Resume</th>
                  <th className="text-left py-4 px-6 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr key={applicant.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{applicant.fullName}</td>
                    <td className="py-4 px-6">{applicant.positionInterest}</td>
                    <td className="py-4 px-6">
                      <a href={`mailto:${applicant.email}`} className="text-primary-600 hover:underline">
                        {applicant.email}
                      </a>
                    </td>
                    <td className="py-4 px-6">
                      <a href={`tel:${applicant.phone}`} className="text-primary-600 hover:underline">
                        {applicant.phone}
                      </a>
                    </td>
                    <td className="py-4 px-6">
                      {applicant.resumeUrl ? (
                        <a
                          href={applicant.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Download
                        </a>
                      ) : (
                        <span className="text-neutral-dark/50">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-neutral-dark/70">
                      {new Date(applicant.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center text-neutral-dark/70">
            <p>No applications found</p>
          </div>
        )}
      </div>

      {applicants.length > 0 && (
        <div className="text-sm text-neutral-dark/70">
          Total applications: {applicants.length}
        </div>
      )}
    </div>
  )
}
