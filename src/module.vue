<template>
  <private-view title="My Custom Module" class="bg-white">
    <div class="w-full relative bg-white">
      <div class="left-[280px] top-0 flex-col justify-start items-start inline-flex">
        <div class="w-full px-10 py-5 bg-indigo-50 justify-start items-start gap-3 inline-flex">
          <div class="grow shrink basis-0 h-[52px] justify-start items-center gap-3 flex">
            <div class="justify-start items-start gap-3 flex">
              <div class="w-[52px] h-[52px] relative">
                <div class="w-[52px] h-[52px] left-0 top-0 absolute bg-slate-300 rounded-full"></div>
                <div class="w-[52px] h-[52px] left-0 top-0 absolute rounded-[32px] justify-center items-center gap-2.5 inline-flex">
                  <div class="w-8 h-8 relative"></div>
                </div>
              </div>
              <div class="flex-col justify-start items-start inline-flex">
                <div class="justify-start items-center gap-1 inline-flex">
                  <div class="text-indigo-300 text-xs font-normal font-['Noto Looped Thai'] leading-tight">Requirements</div>
                  <div class="w-4 h-4 relative"></div>
                  <div class="text-indigo-300 text-xs font-semibold font-['Noto Looped Thai'] leading-tight">Create Requirement</div>
                </div>
                <div class="text-indigo-900 text-xl font-semibold font-['Noto Looped Thai'] capitalize leading-loose">Requirements</div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-10 flex-col justify-start items-start gap-5 flex">
          <div class="p-10 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 flex">
            <div class="self-stretch justify-start items-start gap-2.5 inline-flex">
              <div class="grow shrink basis-0 h-8 justify-start items-start gap-2.5 flex">
                <div class="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                  <div class="text-indigo-900 text-2xl font-semibold font-['Noto Looped Thai'] capitalize leading-loose">Information</div>
                </div>
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-5 flex">
              <div class="justify-start items-start gap-5 inline-flex">
                <div class="justify-start items-center gap-2 flex">
                  <div class="w-4 h-4 relative">
                    <div class="w-4 h-4 left-0 top-0 absolute bg-white rounded-full border border-indigo-900"></div>
                    <div class="w-2 h-2 left-[4px] top-[4px] absolute bg-indigo-900 rounded-full"></div>
                  </div>
                  <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">New Customer</div>
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="w-4 h-4 relative">
                    <div class="w-4 h-4 left-0 top-0 absolute bg-white rounded-full border border-indigo-900"></div>
                  </div>
                  <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Existing Customer</div>
                </div>
              </div>
              <div class="w-[1000px] justify-start items-start gap-6 inline-flex">
                <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div class="justify-start items-start gap-1 inline-flex">
                    <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Company Name</div>
                  </div>
                  <input type="text" class="self-stretch text-black px-4 font-normal py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex" value="HarmonyX Solution Co., Ltd." />
                  <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7"></div>
                </div>
              </div>
              <div class="w-[1000px] justify-start items-start gap-6 inline-flex">
                <div class="grow shrink basis-0 h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                  <div class="justify-start items-start gap-1 inline-flex">
                    <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Received Channel</div>
                  </div>
                  <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-between items-center inline-flex">
                    <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Email</div>
                    <div class="w-5 h-5 relative"></div>
                  </div>
                </div>
                <div class="grow shrink basis-0 h-[72px]"></div>
              </div>
            </div>
            <div class="self-stretch h-[236px] flex-col justify-start items-start gap-3 flex">
              <div class="h-8 flex-col justify-start items-start gap-5 flex">
                <div class="text-black text-xl font-semibold font-['Noto Looped Thai'] capitalize leading-loose">address</div>
              </div>
              <div class="self-stretch h-48 flex-col justify-start items-start gap-5 flex">
                <div class="w-[1000px] justify-start items-start gap-6 inline-flex">
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Address</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">BLOCK 28 : CREATIVE & STARTUP VILLAGE Building D Room 207, Pathum Wan, Bangkok 10330<br/></div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch justify-start items-start gap-6 inline-flex">
                  <div class="w-[488px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Country</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-between items-center inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Thailand</div>
                      <div class="w-5 h-5 relative"></div>
                    </div>
                  </div>
                  <div class="grow shrink basis-0"></div>
                </div>
              </div>
            </div>
            <div class="self-stretch h-[300px] flex-col justify-start items-start gap-3 flex">
              <div class="h-8 flex-col justify-start items-start gap-5 flex">
                <div class="text-black text-xl font-semibold font-['Noto Looped Thai'] capitalize leading-loose">Contact Person</div>
              </div>
              <div class="self-stretch h-64 flex-col justify-start items-start gap-5 flex">
                <div class="self-stretch justify-start items-start gap-6 inline-flex">
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">First name</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Kansita</div>
                    </div>
                  </div>
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Last name</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Krajangjit</div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch justify-start items-start gap-6 inline-flex">
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Position</div>
                      <div class="text-slate-400 text-sm font-normal font-['Noto Looped Thai'] leading-normal">(optional)</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Project Manager</div>
                    </div>
                  </div>
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Contact Number</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">088 888 8888</div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch justify-start items-start gap-6 inline-flex">
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div class="justify-start items-start gap-1 inline-flex">
                      <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Email</div>
                    </div>
                    <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                      <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">kansita@gmail.com</div>
                    </div>
                  </div>
                  <div class="grow shrink basis-0"></div>
                </div>
              </div>
            </div>
            <div class="self-stretch h-[0px] border border-slate-200"></div>
            <div class="w-[1000px] justify-start items-start gap-6 inline-flex">
              <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div class="justify-start items-start gap-1 inline-flex">
                  <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Project Name</div>
                  <div class="text-slate-400 text-sm font-normal font-['Noto Looped Thai'] leading-normal">(optional)</div>
                </div>
                <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                  <div class="text-black text-base font-normal font-['Noto Looped Thai'] leading-7">OML renew 2nd year IPLC 100G Tachileik-SG IG-PLC-2109</div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-[316px] p-10 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 flex">
            <div class="self-stretch justify-start items-start gap-2.5 inline-flex">
              <div class="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                <div class="text-indigo-900 text-2xl font-semibold font-['Noto Looped Thai'] capitalize leading-loose">Requirement</div>
              </div>
            </div>
            <div class="self-stretch h-[184px] flex-col justify-start items-start gap-1 flex">
              <div class="justify-start items-start gap-1 inline-flex">
                <div class="text-slate-600 text-sm font-normal font-['Noto Looped Thai'] leading-normal">Requirement Detail</div>
              </div>
              <div class="self-stretch px-4 py-2 bg-white rounded-lg border border-slate-300 justify-start items-start gap-2.5 inline-flex">
                <div class="grow shrink basis-0 text-black text-base font-normal font-['Noto Looped Thai'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/><br/></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-10 pt-5 pb-10 justify-end items-center gap-3 inline-flex">
          <div class="justify-start items-start gap-5 flex">
            <div class="h-11 px-5 py-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
              <div class="grow shrink basis-0 text-center text-indigo-900 text-base font-semibold font-['Noto Looped Thai'] leading-7">Button</div>
            </div>
            <div class="px-5 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex">
              <div class="grow shrink basis-0 text-center text-white text-base font-semibold font-['Noto Looped Thai'] leading-7">Create</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </private-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import './main.css'

export default defineComponent({
  components: {
    VueApexCharts
  },
  setup() {
    return {
      series: [70],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Cricket']
      }
    }
  }
})
</script>
<style>

</style>
