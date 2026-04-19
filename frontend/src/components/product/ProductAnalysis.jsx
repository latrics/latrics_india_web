import { Flame } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const TABLE_HEADERS = ["SPECIFICATIONS", "LICOPTER-P720", "MARKET PRODUCT", "LICOPTER-P720"];

const buildTableData = () => {
  const rows = Array(10).fill({ spec: "Sponsor Tag", licopter1: "Powered By", market: "Powered By", licopter2: "Powered By" });
  rows[0] = { spec: "Amount", licopter1: "₹1,00,000", market: "₹1,00,000", licopter2: "₹1,00,000" };
  return rows;
};

const TABLE_DATA = buildTableData();

export default function ProductAnalysis() {
  return (
    <Container id="product-analysis" className="mb-20">
      <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#121212]/90 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
        {/* Subtle Atmospheric Background Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#DA291C] opacity-5 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />

        <div className="relative z-10">
          <SectionHeading
            badgeIcon={Flame}
            badgeText="ANALYSIS"
            title={<>Transforming Industries Through<br /> Intelligent Innovation</>}
            description="We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility."
          />

          <div className="w-full overflow-x-auto no-scrollbar rounded-2xl border border-white/[0.05]">
            <table className="w-full min-w-[800px] border-collapse bg-white/[0.01]">
              <thead>
                <tr className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400">
                  <th className="bg-white/[0.08] py-5 px-6 text-left border-r border-white/5">{TABLE_HEADERS[0]}</th>
                  <th className="bg-brand text-white py-5 px-6 text-center border-r border-white/5">{TABLE_HEADERS[1]}</th>
                  <th className="bg-white/[0.12] py-5 px-6 text-center border-r border-white/5">{TABLE_HEADERS[2]}</th>
                  <th className="bg-white/[0.08] py-5 px-6 text-center">{TABLE_HEADERS[3]}</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {TABLE_DATA.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 text-gray-400 border-r border-white/5">{row.spec}</td>
                    <td className="py-5 px-6 text-white text-center border-r border-white/5">{row.licopter1}</td>
                    <td className="py-5 px-6 text-white text-center border-r border-white/5">{row.market}</td>
                    <td className="py-5 px-6 text-white text-center uppercase">{row.licopter2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}
