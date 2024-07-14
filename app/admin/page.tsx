import Image from "next/image";

export default function AdminHome() {
  return (
    <div className="overflow-hidden">
      <h2 className="font-inter text-left text-2xl font-semibold">Dashboard</h2>
      <div className="py-7 grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        <div className="bg-gray-800 rounded-[16px] p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2.5">
              <p className="font-inter text-sm font-normal">Total User</p>
              <p className="font-inter text-3xl font-medium">40,689</p>
            </div>
            <Image
              src="/images/totalUser.png"
              alt="Total order"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="bg-gray-800 rounded-[16px] p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2.5">
              <p className="font-inter text-sm font-normal">Total Order</p>
              <p className="font-inter text-3xl font-medium">10,289</p>
            </div>
            <Image
              src="/images/totalOrder.png"
              alt="Total order"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="bg-gray-800 rounded-[16px] p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2.5">
              <p className="font-inter text-sm font-normal">Total Sales</p>
              <p className="font-inter text-3xl font-medium">$40,689</p>
            </div>
            <Image
              src="/images/totalSales.png"
              alt="Total order"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      {/* Add your main content here */}
    </div>
  );
}
