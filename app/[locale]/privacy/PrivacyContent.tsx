"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PrivacyContent() {
    const t = useTranslations('Privacy');

    return (
        <div>
            {/* Header */}
            <header className="bg-black text-white flex justify-between items-center px-6 py-4 shadow-md">
                <div className="h-16 flex overflow-hidden">
                    <img className="h-[200%] mt-[-25%]" src="/logo_idilio.jpeg" alt="idilio.tv" />
                </div>
                <Link href="/" className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
                    {t('backToHome')}
                </Link>
            </header>

            {/* Privacy Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {t('pageTitle')}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="space-y-8 text-gray-300 leading-relaxed">

                        {/* Introduction */}
                        <section>
                            <p className="text-lg mb-4">{t('intro')}</p>
                            <p className="text-lg">{t('contactInfo')}</p>
                        </section>

                        {/* Section A: Our collection, use, and disclosure of personal information */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-white">{t('sectionA.title')}</h2>

                            <h3 className="text-xl font-semibold mb-4 text-white">{t('sectionA.categoriesTitle')}</h3>
                            <p className="mb-4">{t('sectionA.categoriesIntro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.personalData.title')}</h4>
                                    <p>{t('sectionA.personalData.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.paymentDetails.title')}</h4>
                                    <p>{t('sectionA.paymentDetails.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.purchaseInfo.title')}</h4>
                                    <p>{t('sectionA.purchaseInfo.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.accountProfile.title')}</h4>
                                    <p>{t('sectionA.accountProfile.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.usageInfo.title')}</h4>
                                    <p>{t('sectionA.usageInfo.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.advertisingInfo.title')}</h4>
                                    <p>{t('sectionA.advertisingInfo.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.deviceNetworkInfo.title')}</h4>
                                    <p>{t('sectionA.deviceNetworkInfo.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.communications.title')}</h4>
                                    <p>{t('sectionA.communications.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionA.sensitiveData.title')}</h4>
                                    <p>{t('sectionA.sensitiveData.content')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Sources of information */}
                        <section>
                            <h3 className="text-xl font-semibold mb-4 text-white">{t('sourcesTitle')}</h3>
                            <p className="mb-4">{t('sourcesIntro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('directlyFromYou.title')}</h4>
                                    <p>{t('directlyFromYou.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('automatically.title')}</h4>
                                    <p>{t('automatically.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('fromPartners.title')}</h4>
                                    <p>{t('fromPartners.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('fromOtherSources.title')}</h4>
                                    <p>{t('fromOtherSources.content')}</p>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>{t('fromOtherSources.serviceProviders')}</li>
                                        <li>{t('fromOtherSources.marketingProviders')}</li>
                                        <li>{t('fromOtherSources.thirdPartySites')}</li>
                                        <li>{t('fromOtherSources.publicSources')}</li>
                                        <li>{t('fromOtherSources.advertisingCompanies')}</li>
                                        <li>{t('fromOtherSources.adServiceProviders')}</li>
                                        <li>{t('fromOtherSources.measurementCompanies')}</li>
                                        <li>{t('fromOtherSources.informationProviders')}</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How we use information */}
                        <section>
                            <h3 className="text-xl font-semibold mb-4 text-white">{t('howWeUseTitle')}</h3>
                            <p className="mb-4">{t('howWeUseIntro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('provideService.title')}</h4>
                                    <p>{t('provideService.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('manageBusiness.title')}</h4>
                                    <p>{t('manageBusiness.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('researchImprove.title')}</h4>
                                    <p>{t('researchImprove.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('enableIntegrations.title')}</h4>
                                    <p>{t('enableIntegrations.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sendMarketing.title')}</h4>
                                    <p>{t('sendMarketing.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('supportAdvertising.title')}</h4>
                                    <p>{t('supportAdvertising.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('securityFraud.title')}</h4>
                                    <p>{t('securityFraud.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('compliance.title')}</h4>
                                    <p>{t('compliance.content')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Who we disclose information to */}
                        <section>
                            <h3 className="text-xl font-semibold mb-4 text-white">{t('disclosureTitle')}</h3>
                            <p className="mb-4">{t('disclosureIntro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('serviceProviders.title')}</h4>
                                    <p>{t('serviceProviders.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('partners.title')}</h4>
                                    <p>{t('partners.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('marketingProviders.title')}</h4>
                                    <p>{t('marketingProviders.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('advertisingCompanies.title')}</h4>
                                    <p>{t('advertisingCompanies.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('promotionalCollaborations.title')}</h4>
                                    <p>{t('promotionalCollaborations.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('corporateTransactions.title')}</h4>
                                    <p>{t('corporateTransactions.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('securityDisclosure.title')}</h4>
                                    <p>{t('securityDisclosure.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('legalCompliance.title')}</h4>
                                    <p>{t('legalCompliance.content')}</p>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                                <p>{t('internationalTransfer')}</p>
                            </div>
                        </section>

                        {/* Section B: Your rights and controls */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-white">{t('sectionB.title')}</h2>

                            <h3 className="text-xl font-semibold mb-4 text-white">{t('sectionB.rightsTitle')}</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.right1.title')}</h4>
                                    <p>{t('sectionB.right1.content')}</p>
                                    <p className="mt-2">{t('sectionB.right1Details')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.right2.title')}</h4>
                                    <p>{t('sectionB.right2.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.right3.title')}</h4>
                                    <p>{t('sectionB.right3.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.right4.title')}</h4>
                                    <p>{t('sectionB.right4.content')}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-white mt-6">{t('sectionB.communicationPreferencesTitle')}</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.emailsTexts.title')}</h4>
                                    <p>{t('sectionB.emailsTexts.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.pushNotifications.title')}</h4>
                                    <p>{t('sectionB.pushNotifications.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.matchingIdentifiers.title')}</h4>
                                    <p>{t('sectionB.matchingIdentifiers.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.marketingCookies.title')}</h4>
                                    <p>{t('sectionB.marketingCookies.content')}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-white mt-6">{t('sectionB.advertisingOptionsTitle')}</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.behavioralAdvertising.title')}</h4>
                                    <p>{t('sectionB.behavioralAdvertising.content')}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('sectionB.digitalAdvertisingAlliance.title')}</h4>
                                    <p>{t('sectionB.digitalAdvertisingAlliance.content')}</p>
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>{t('sectionB.digitalAdvertisingAlliance.canada')}</li>
                                        <li>{t('sectionB.digitalAdvertisingAlliance.usa')}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                                <p>{t('sectionB.moreInfo')}</p>
                                <p className="mt-2">{t('sectionB.contactQuestions')}</p>
                            </div>
                        </section>

                        {/* Section C: Account access and profiles */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-white">{t('sectionC.title')}</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionC.sharingAccountTitle')}</h3>
                                    <p>{t('sectionC.sharingAccountContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionC.profilesTitle')}</h3>
                                    <p>{t('sectionC.profilesContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionC.profileTransferTitle')}</h3>
                                    <p>{t('sectionC.profileTransferContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionC.loginFeaturesTitle')}</h3>
                                    <p>{t('sectionC.loginFeaturesContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionC.removeDeviceAccessTitle')}</h3>
                                    <p>{t('sectionC.removeDeviceAccessContent')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section D: Cookies and other Technologies */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-white">{t('sectionD.title')}</h2>

                            <p className="mb-4">{t('sectionD.intro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionD.cookiesTitle')}</h3>
                                    <p>{t('sectionD.cookiesContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionD.whyUseTitle')}</h3>
                                    <p>{t('sectionD.whyUseContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionD.howToExerciseTitle')}</h3>

                                    <div className="space-y-4 mt-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionD.cookiesOptions.title')}</h4>
                                            <p>{t('sectionD.cookiesOptions.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionD.hashedIdentifiersOptions.title')}</h4>
                                            <p>{t('sectionD.hashedIdentifiersOptions.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionD.deviceIdentifiersOptions.title')}</h4>
                                            <p>{t('sectionD.deviceIdentifiersOptions.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionD.otherTechnologiesOptions.title')}</h4>
                                            <p>{t('sectionD.otherTechnologiesOptions.content')}</p>
                                        </div>
                                    </div>

                                    <p className="mt-4">{t('sectionD.additionalOptions')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section E: Other important privacy disclosures */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-white">{t('sectionE.title')}</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionE.sharingFeaturesTitle')}</h3>
                                    <p>{t('sectionE.sharingFeaturesContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionE.securityTitle')}</h3>
                                    <p>{t('sectionE.securityContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionE.retentionTitle')}</h3>
                                    <p>{t('sectionE.retentionContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionE.otherSitesTitle')}</h3>
                                    <p>{t('sectionE.otherSitesContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionE.minorsTitle')}</h3>
                                    <p>{t('sectionE.minorsContent')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionE.changesTitle')}</h3>
                                    <p>{t('sectionE.changesContent')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section F: Supplemental privacy disclosures for certain services */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 text-white">{t('sectionF.title')}</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionF.gamesTitle')}</h3>
                                    <p>{t('sectionF.gamesIntro')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionF.gamesCategoriesTitle')}</h3>
                                    <p>{t('sectionF.gamesCategoriesIntro')}</p>

                                    <div className="space-y-4 mt-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionF.gamesAccountProfile.title')}</h4>
                                            <p>{t('sectionF.gamesAccountProfile.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionF.gamesUsageInfo.title')}</h4>
                                            <p>{t('sectionF.gamesUsageInfo.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionF.gamesDeviceNetwork.title')}</h4>
                                            <p>{t('sectionF.gamesDeviceNetwork.content')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionF.gamesHowWeUseTitle')}</h3>
                                    <p>{t('sectionF.gamesHowWeUseIntro')}</p>

                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold text-white">{t('sectionF.gamesProvideService.title')}</h4>
                                        <p>{t('sectionF.gamesProvideService.content')}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionF.gamesDisclosureTitle')}</h3>
                                    <p>{t('sectionF.gamesDisclosureIntro')}</p>

                                    <div className="space-y-4 mt-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionF.gamesLegalCompliance.title')}</h4>
                                            <p>{t('sectionF.gamesLegalCompliance.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{t('sectionF.gamesOtherPlayers.title')}</h4>
                                            <p>{t('sectionF.gamesOtherPlayers.content')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">{t('sectionF.gamesTVAndWebTitle')}</h3>
                                    <p>{t('sectionF.gamesTVAndWebContent')}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 