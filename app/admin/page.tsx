import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export default async function AdminDashboard() {
  const inquiriesCount = await prisma.inquiry.count()
  const applicantsCount = await prisma.applicant.count()
  const newInquiries = await prisma.inquiry.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    where: { status: 'new' },
  })
  const newApplicants = await prisma.applicant.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-neutral-dark/70 mt-2">Welcome to your NEAT Engagements admin dashboard</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-neutral-dark mb-2">Total Inquiries</h3>
          <p className="text-4xl font-bold text-primary-600">{inquiriesCount}</p>
          <Link href="/admin/inquiries" className="text-primary-600 hover:underline text-sm mt-4 inline-block">
            View All →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-neutral-dark mb-2">Total Applicants</h3>
          <p className="text-4xl font-bold text-primary-600">{applicantsCount}</p>
          <Link href="/admin/applicants" className="text-primary-600 hover:underline text-sm mt-4 inline-block">
            View All →
          </Link>
        </div>
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Recent Inquiries</h3>
          <Link href="/admin/inquiries" className="text-primary-600 hover:underline">
            View All
          </Link>
        </div>

        {newInquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">Subject</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {newInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{inquiry.fullName}</td>
                    <td className="py-3 px-4">{inquiry.email}</td>
                    <td className="py-3 px-4">{inquiry.subject}</td>
                    <td className="py-3 px-4 text-neutral-dark/70">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-neutral-dark/70">No new inquiries</p>
        )}
      </div>

      {/* Recent Applicants */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Recent Applications</h3>
          <Link href="/admin/applicants" className="text-primary-600 hover:underline">
            View All
          </Link>
        </div>

        {newApplicants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Position</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {newApplicants.map((applicant) => (
                  <tr key={applicant.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{applicant.fullName}</td>
                    <td className="py-3 px-4">{applicant.positionInterest}</td>
                    <td className="py-3 px-4">{applicant.email}</td>
                    <td className="py-3 px-4 text-neutral-dark/70">
                      {new Date(applicant.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-neutral-dark/70">No applications yet</p>
        )}
      </div>
    </div>
  )
}
