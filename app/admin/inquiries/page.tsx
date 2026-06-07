import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function InquiriesPage() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Inquiries Management</h2>
        <p className="text-neutral-dark/70 mt-2">View and manage all customer inquiries</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {inquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Name</th>
                  <th className="text-left py-4 px-6 font-semibold">Email</th>
                  <th className="text-left py-4 px-6 font-semibold">Company</th>
                  <th className="text-left py-4 px-6 font-semibold">Subject</th>
                  <th className="text-left py-4 px-6 font-semibold">Status</th>
                  <th className="text-left py-4 px-6 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{inquiry.fullName}</td>
                    <td className="py-4 px-6">
                      <a href={`mailto:${inquiry.email}`} className="text-primary-600 hover:underline">
                        {inquiry.email}
                      </a>
                    </td>
                    <td className="py-4 px-6">{inquiry.company || '—'}</td>
                    <td className="py-4 px-6">{inquiry.subject}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        inquiry.status === 'new'
                          ? 'bg-blue-100 text-blue-800'
                          : inquiry.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-neutral-dark/70">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center text-neutral-dark/70">
            <p>No inquiries found</p>
          </div>
        )}
      </div>

      {inquiries.length > 0 && (
        <div className="text-sm text-neutral-dark/70">
          Total inquiries: {inquiries.length}
        </div>
      )}
    </div>
  )
}
