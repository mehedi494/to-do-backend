import React from "react";

export default function ThirdContentEntry() {
  return (
    <div>
      <div class="h-full overflow-x-auto rounded-3xl bg-gray-100  text-dark2 shadow-md">
        <div class="relative">
          <div class="relative ">
            <table class="w-full overflow-hidden rounded-lg bg-gray-100 text-left">
              <thead class="bg-white text-base font-semibold">
                <tr class="text-gelios">
                  <th scope="col" class="w-1/4 px-6 py-2">
                    Date
                  </th>
                  <th scope="col" class="w-1/4 px-6 py-2 text-center">
                    Amount
                  </th>
                  <th scope="col" class="w-1/4 px-6 py-2 text-center">
                    Chain
                  </th>
                  <th scope="col" class="w-1/4 px-6 py-2 text-center">
                    Transaction
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="4">
                    <div class="flex justify-center">
                      <div>
                        <img
                          alt="empty"
                          loading="lazy"
                          width="300"
                          height="300"
                          decoding="async"
                          data-nimg="1"
                          src="/assets/images/default/empty.svg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
