import React from "react";
import TitleParagraph from "../../components/TitleParagraph";
import { privacyPolicy } from "../../data/privacyPolicy.json";
import TitlePoints from "../../components/TitlePoints";
import { Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="py-20 bg-[#FAF8F3]">
      {/* title */}
      <section className="max-w-[1240px] mx-auto ">
        <h2 className="cormorant text-4xl sm:text-5xl md:text-[56px] text-[#1E2D40] leading-tight mt-16 lg:mt-0 px-5 sm:px-16 xl:px-0 mb-10 ">
          Privacy <em className="italic text-[#C9A84C]">Policy</em>
        </h2>

        <div className="bg-white/70  backdrop-blur-sm border border-[#E8E1D3]  p-7 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <TitleParagraph
            title={privacyPolicy.introPrivacy.title}
            content={privacyPolicy.introPrivacy.info}
          />
          <TitleParagraph
            title={privacyPolicy.informationCollect.title}
            content={privacyPolicy.informationCollect.info}
          />

          <TitlePoints
            title={privacyPolicy.informationYou.title}
            subInfo={privacyPolicy.informationYou.subInfo}
            points={privacyPolicy.informationYou.points}
          />
          <TitlePoints
            title={privacyPolicy.thirdParty.title}
            subInfo={privacyPolicy.thirdParty.subInfo}
            points={privacyPolicy.thirdParty.points}
          />

          <TitleParagraph
            title={privacyPolicy.infoCollect.title}
            content={privacyPolicy.infoCollect.info}
          />
          <TitleParagraph
            title={privacyPolicy.notTrack.title}
            content={privacyPolicy.notTrack.info}
          />
          <TitlePoints
            title={privacyPolicy.howUse.title}
            subInfo={privacyPolicy.howUse.subInfo}
            points={privacyPolicy.howUse.points}
          />
          <TitlePoints
            title={privacyPolicy.disclosure.title}
            subInfo={privacyPolicy.disclosure.subInfo}
            points={privacyPolicy.disclosure.points}
          />
          <TitlePoints
            title={privacyPolicy.rights.title}
            subInfo={privacyPolicy.rights.subInfo}
            points={privacyPolicy.rights.points}
          />
          <TitlePoints
            title={privacyPolicy.taxusResidant.title}
            subInfo={privacyPolicy.taxusResidant.subInfo}
            points={privacyPolicy.taxusResidant.points}
          />
          <TitlePoints
            title={privacyPolicy.howExercise.title}
            subInfo={privacyPolicy.howExercise.subInfo}
            points={privacyPolicy.howExercise.points}
          />
          <TitleParagraph
            title={privacyPolicy.beforeProcess.title}
            content={privacyPolicy.beforeProcess.info}
          />
          <TitleParagraph
            title={privacyPolicy.authorizedAgent.title}
            content={privacyPolicy.authorizedAgent.info}
          />
          <TitleParagraph
            title={privacyPolicy.appeal.title}
            content={privacyPolicy.appeal.info}
          />
          <TitleParagraph
            title={privacyPolicy.protection.title}
            content={privacyPolicy.protection.info}
          />
          <TitleParagraph
            title={privacyPolicy.retention.title}
            content={privacyPolicy.retention.info}
          />
          <TitleParagraph
            title={privacyPolicy.thirdParties.title}
            content={privacyPolicy.thirdParties.info}
          />
          <TitleParagraph
            title={privacyPolicy.international.title}
            content={privacyPolicy.international.info}
          />
          <TitleParagraph
            title={privacyPolicy.children.title}
            content={privacyPolicy.children.info}
          />
          <TitleParagraph
            title={privacyPolicy.updates.title}
            content={privacyPolicy.updates.info}
          />

          {/* Email Box */}
          <div className="mt-8 bg-[#FCFBF8] border border-[#EFE7D8] px-6 py-5 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1E2D40] tracking-tight">
              Contact Us
            </h3>

            {/* Description */}
            <p className="mt-2 mb-4 text-[#6B6B6B] text-[17px] md:text-[18px] leading-[1.9] max-w-3xl">
              If you have any questions about this Privacy Policy, feel free to
              contact our team anytime via email.
            </p>

            <div className="inline-flex break-words items-center gap-2 sm:gap-4 ">
              <div className="hidden sm:flex items-center justify-center w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#F4E7BE] text-[#9C7B2E]">
                <Mail className="text-[#9C7B2E]  w-4 sm:w-6 h-4 sm:h-6 " />
              </div>

              <a
                href="mailto:contactus@advancephysicaltherapy.com"
                className="text-[#1E2D40]   text-[13px]  sm:text-[17px] font-medium hover:text-[#C9A84C] transition-colors duration-200"
              >
                contactus@advancephysicaltherapy.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
