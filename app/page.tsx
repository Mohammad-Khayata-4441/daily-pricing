import Image from "next/image";
import { data } from "./data";

export default function Home() {
  const currency = "ل.س";
  const date = new Date().toLocaleDateString();

  const categories = data;

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="relative h-[300px] w-full">
        <Image
          className="object-contain object-center"
          src={"/h1.jpg"}
          alt="free syria"
          fill
        />
      </header>
      <main className="grid gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full col-span-2">
          <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                أسعار المواد الأساسية اليوم
              </h3>
              <p className="text-gray-600 ">
                متوسط الأسعار ضمن مختلف المحافظات.
              </p>
              <p className="text-gray-600 ">
                لتاريخ <span className="font-bold mx-2">{date}</span>
              </p>
            </div>
          </div>
          {categories.map((category) => (
            <div key={category.title} className="mb-10">
              <h2 className="text-xl font-bold mb-3 text-slate-900">
                {category.title}
              </h2>
              <div className="relative flex flex-col w-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="text-right table-auto w-full">
                  <thead>
                    <tr className="border-b border-slate-300 bg-slate-50">
                      <th className="p-4 text-lg font-normal leading-none">
                        صورة
                      </th>
                      <th className="p-4 text-lg font-normal leading-none">
                        المادة
                      </th>
                      <th className="p-4 text-lg font-normal leading-none">
                        أقل سعر
                      </th>
                      <th className="p-4 text-lg font-normal leading-none">
                        متوسط السعر
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.products.map((pr) => (
                      <tr className="hover:bg-slate-50" key={pr.id}>
                        <td className="p-4 border-b border-slate-200 py-5">
                          <img
                            src={pr.image}
                            alt={pr.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </td>
                        <td className="p-4 border-b border-slate-200 py-5">
                          <p className="block font-semibold text-lg text-slate-800">
                            {pr.name} ({pr.quantity} {pr.unit})
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200 py-5">
                          <p className="text-lg">
                            {pr.minPrice} {currency}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200 py-5">
                          <p className="text-lg">
                            {pr.avgPrice} {currency}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
