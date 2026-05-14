import React from "react";
import { termsUse } from "../../data/termsUse.json";
import TitleParagraph from "../../components/TitleParagraph";
import SubTitleParagraph from "../../components/SubTitleParagraph";

const TermsConditions = () => {
  return (
    <main className="py-20 bg-[#FAF8F3]">
      {/* title */}
      <section className="max-w-[1240px] mx-auto ">
        <h2 className="cormorant text-4xl sm:text-5xl md:text-[56px] text-[#1E2D40] leading-tight mt-16 lg:mt-0 px-5 sm:px-16 xl:px-0 mb-10 ">
          Terms <em className="italic text-[#C9A84C]">of Use</em>
        </h2>

        <div className="bg-white/70  backdrop-blur-sm border border-[#E8E1D3]  p-7 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <div className="max-w-[1240px] mx-auto  md:px-8 py-5 ">
            <div className="text-[#6F6F6F] text-base font-semibold uppercase  leading-[1.9] ">
              ARBITRATION NOTICE: SECTION 10 CONTAINS A MANDATORY ARBITRATION
              PROVISION AND CLASS-ACTION WAIVER, WHICH REQUIRES YOU AND Speers
              Road Physiotherapy TO RESOLVE MOST DISPUTES AND CLAIMS BY BINDING,
              INDIVIDUAL ARBITRATION AND NOT BY MEANS OF A CLASS ARBITRATION, A
              CLASS ACTION, ANY OTHER KIND OF REPRESENTATIVE PROCEEDING, OR A
              JURY TRIAL.{" "}
            </div>

            <div className="text-[#6F6F6F] text-[17px] md:text-[19px] leading-[1.9] mt-5 break-words ">
              <span className="font-semibold">Speers Road Physiotherapy </span> dba
              Speers Road Physiotherapy (hereinafter{" "}
              <span className="font-semibold">“APT”, “we”, “us”,</span> or{" "}
              <span className="font-semibold">“our”</span>) operates the{" "}
              <a
                className="text-[#C9A84C] inline"
                href="https://speersroadphysiotherapy.com/"
              >
                https://speersroadphysiotherapy.com/
              </a>{" "}
              website (the <span className="font-semibold">“Site”</span>). These
              Terms of Use (these <span className="font-semibold">“Terms”</span>
              ) apply to the Site and to any other website or application
              offered by us that references or links to these Terms
              (collectively, the
              <span className="font-semibold">“Services”</span>).
            </div>
          </div>

          <TitleParagraph
            title={termsUse.intro.title}
            content={termsUse.intro.info}
          />
          <TitleParagraph
            title={termsUse.use.title}
            content={termsUse.use.info}
          />
          <TitleParagraph
            title={termsUse.noAdvice.title}
            content={termsUse.noAdvice.info}
          />
          <TitleParagraph
            title={termsUse.prohabited.title}
            content={termsUse.prohabited.info}
          />
          <TitleParagraph
            title={termsUse.Intellectual.title}
            content={termsUse.Intellectual.info}
          />
          <TitleParagraph
            title={termsUse.privacy.title}
            content={termsUse.privacy.info}
          />
          <TitleParagraph
            title={termsUse.updates.title}
            content={termsUse.updates.info}
          />
          <TitleParagraph
            title={termsUse.feedback.title}
            content={termsUse.feedback.info}
          />
          <TitleParagraph
            title={termsUse.disclaimers.title}
            content={termsUse.disclaimers.info}
          />
          <TitleParagraph
            title={termsUse.indemnification.title}
            content={termsUse.indemnification.info}
          />
          <TitleParagraph
            title={termsUse.dispute.title}
            content={termsUse.dispute.info}
          />
          <SubTitleParagraph
            title={termsUse.claims.title}
            content={termsUse.claims.info}
          />
          <SubTitleParagraph
            title={termsUse.informal.title}
            content={termsUse.informal.info}
          />
          <SubTitleParagraph
            title={termsUse.arbitration.title}
            content={termsUse.arbitration.info}
          />
          <SubTitleParagraph
            title={termsUse.binding.title}
            content={termsUse.binding.info}
          />
          <SubTitleParagraph
            title={termsUse.claimSection.title}
            content={termsUse.claimSection.info}
          />
          <SubTitleParagraph
            title={termsUse.fees.title}
            content={termsUse.fees.info}
          />
          <SubTitleParagraph
            title={termsUse.frivolous.title}
            content={termsUse.frivolous.info}
          />
          <SubTitleParagraph
            title={termsUse.confidential.title}
            content={termsUse.confidential.info}
          />
          <SubTitleParagraph
            title={termsUse.oneYear.title}
            content={termsUse.oneYear.info}
          />
          <SubTitleParagraph
            title={termsUse.mass.title}
            content={termsUse.mass.info}
          />
          <SubTitleParagraph
            title={termsUse.bellwether.title}
            content={termsUse.bellwether.info}
            titleWeight="font-normal"
          />
          <SubTitleParagraph
            title={termsUse.mediation.title}
            content={termsUse.mediation.info}
            titleWeight="font-normal"
          />
          <SubTitleParagraph
            title={termsUse.remaining.title}
            content={termsUse.remaining.info}
            titleWeight="font-normal"
          />
          <SubTitleParagraph
            title={termsUse.opting.title}
            content={termsUse.opting.info}
          />
          <SubTitleParagraph
            title={termsUse.rejection.title}
            content={termsUse.rejection.info}
          />
          <SubTitleParagraph
            title={termsUse.severability.title}
            content={termsUse.severability.info}
          />
          <TitleParagraph
            title={termsUse.liability.title}
            content={termsUse.liability.info}
          />
          <TitleParagraph
            title={termsUse.governing.title}
            content={termsUse.governing.info}
          />
          <TitleParagraph
            title={termsUse.entire.title}
            content={termsUse.entire.info}
          />
          <TitleParagraph
            title={termsUse.secondSeverability.title}
            content={termsUse.secondSeverability.info}
          />
          <TitleParagraph
            title={termsUse.jurisdiction.title}
            content={termsUse.jurisdiction.info}
          />
          <TitleParagraph
            title={termsUse.changes.title}
            content={termsUse.changes.info}
          />
          <TitleParagraph
            title={termsUse.copyright.title}
            content={termsUse.copyright.info}
          />
          <TitleParagraph
            title={termsUse.contact.title}
            content={termsUse.contact.info}
          />
          <TitleParagraph
            title={termsUse.textMessaging.title}
            content={termsUse.textMessaging.info}
          />
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
