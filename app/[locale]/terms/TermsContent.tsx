"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TermsContent() {
    const t = useTranslations('Terms');

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

            {/* Terms Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {t('pageTitle')}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="space-y-6 text-gray-300 leading-relaxed">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('introduction.title')}</h2>
                            <p className="mb-4">{t('introduction.content')}</p>
                            <p className="mb-4">{t('introduction.content2')}</p>
                            <p>{t('introduction.content3')}</p>
                        </section>

                        {/* Eligibility */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('eligibility.title')}</h2>
                            <p>{t('eligibility.content')}</p>
                        </section>

                        {/* Acceptance */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('acceptance.title')}</h2>
                            <p className="mb-4">{t('acceptance.content')}</p>
                            <p>{t('acceptance.content2')}</p>
                        </section>

                        {/* Membership */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('membership.title')}</h2>
                            <p className="mb-4">{t('membership.content')}</p>
                            <p className="mb-4">{t('membership.content2')}</p>
                            <p>{t('membership.content3')}</p>
                        </section>

                        {/* Subscription Plans */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('subscriptionPlans.title')}</h2>
                            <p className="mb-4">{t('subscriptionPlans.content')}</p>
                            <p>{t('subscriptionPlans.content2')}</p>
                        </section>

                        {/* Special Offers */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('specialOffers.title')}</h2>
                            <p>{t('specialOffers.content')}</p>
                        </section>

                        {/* Billing */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('billing.title')}</h2>
                            <p className="mb-4">{t('billing.content')}</p>
                            <p className="mb-4">{t('billing.content2')}</p>
                            <p>{t('billing.content3')}</p>
                        </section>

                        {/* Cancellation */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('cancellation.title')}</h2>
                            <p className="mb-4">{t('cancellation.content')}</p>
                            <p className="mb-4">{t('cancellation.content2')}</p>
                            <p>{t('cancellation.content3')}</p>
                        </section>

                        {/* Account Deletion */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('accountDeletion.title')}</h2>
                            <p>{t('accountDeletion.content')}</p>
                        </section>

                        {/* Service Usage */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('serviceUsage.title')}</h2>
                            <p className="mb-4">{t('serviceUsage.content')}</p>
                            <p className="mb-4">{t('serviceUsage.content2')}</p>
                            <p>{t('serviceUsage.content3')}</p>
                        </section>

                        {/* Service Evolution */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('serviceEvolution.title')}</h2>
                            <p>{t('serviceEvolution.content')}</p>
                        </section>

                        {/* Offline Content */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('offlineContent.title')}</h2>
                            <p>{t('offlineContent.content')}</p>
                        </section>

                        {/* Prohibited Activities */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('prohibitedActivities.title')}</h2>
                            <p className="mb-4">{t('prohibitedActivities.intro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.unauthorizedReproduction.title')}</h3>
                                    <p>{t('prohibitedActivities.unauthorizedReproduction.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.circumvention.title')}</h3>
                                    <p>{t('prohibitedActivities.circumvention.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.reverseEngineering.title')}</h3>
                                    <p>{t('prohibitedActivities.reverseEngineering.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.manipulation.title')}</h3>
                                    <p>{t('prohibitedActivities.manipulation.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.unauthorizedCommercial.title')}</h3>
                                    <p>{t('prohibitedActivities.unauthorizedCommercial.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.impersonation.title')}</h3>
                                    <p>{t('prohibitedActivities.impersonation.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.harassment.title')}</h3>
                                    <p>{t('prohibitedActivities.harassment.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.illegalContent.title')}</h3>
                                    <p>{t('prohibitedActivities.illegalContent.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.unauthorizedInfo.title')}</h3>
                                    <p>{t('prohibitedActivities.unauthorizedInfo.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.conflictOfInterest.title')}</h3>
                                    <p>{t('prohibitedActivities.conflictOfInterest.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.repeatInfringement.title')}</h3>
                                    <p>{t('prohibitedActivities.repeatInfringement.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.abuseReporting.title')}</h3>
                                    <p>{t('prohibitedActivities.abuseReporting.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.preservationCopies.title')}</h3>
                                    <p>{t('prohibitedActivities.preservationCopies.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.automatedAnalysis.title')}</h3>
                                    <p>{t('prohibitedActivities.automatedAnalysis.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.accuracyInfo.title')}</h3>
                                    <p>{t('prohibitedActivities.accuracyInfo.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.securityViruses.title')}</h3>
                                    <p>{t('prohibitedActivities.securityViruses.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.advertisingThirdParty.title')}</h3>
                                    <p>{t('prohibitedActivities.advertisingThirdParty.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('prohibitedActivities.consumerRights.title')}</h3>
                                    <p>{t('prohibitedActivities.consumerRights.content')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Prohibited Consequences */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('prohibitedConsequences.title')}</h2>
                            <p>{t('prohibitedConsequences.content')}</p>
                        </section>

                        {/* Viewing Experience */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('viewingExperience.title')}</h2>
                            <p>{t('viewingExperience.content')}</p>
                        </section>

                        {/* Software */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('software.title')}</h2>
                            <p className="mb-4">{t('software.content')}</p>
                            <p>{t('software.content2')}</p>
                        </section>

                        {/* Password Security */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('passwordSecurity.title')}</h2>
                            <p className="mb-4">{t('passwordSecurity.content')}</p>
                            <p>{t('passwordSecurity.content2')}</p>
                        </section>

                        {/* Content and IP */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('contentIP.title')}</h2>
                            <h3 className="text-xl font-semibold mb-2 text-white">{t('contentIP.subtitle')}</h3>
                            <p className="mb-4">{t('contentIP.content')}</p>
                            <p>{t('contentIP.content2')}</p>
                        </section>

                        {/* Content Restrictions */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('contentRestrictions.title')}</h2>
                            <p>{t('contentRestrictions.content')}</p>
                        </section>

                        {/* Third Party Ads */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('thirdPartyAds.title')}</h2>
                            <p>{t('thirdPartyAds.content')}</p>
                        </section>

                        {/* User Content */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('userContent.title')}</h2>
                            <p className="mb-4">{t('userContent.intro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.rights.title')}</h3>
                                    <p>{t('userContent.rights.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.prohibitedContent.title')}</h3>
                                    <p>{t('userContent.prohibitedContent.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.licenseToIdilio.title')}</h3>
                                    <p>{t('userContent.licenseToIdilio.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.userAccess.title')}</h3>
                                    <p>{t('userContent.userAccess.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.nameImageRights.title')}</h3>
                                    <p>{t('userContent.nameImageRights.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.waiverMoralRights.title')}</h3>
                                    <p>{t('userContent.waiverMoralRights.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.musicSpecifications.title')}</h3>
                                    <p>{t('userContent.musicSpecifications.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.privacyControl.title')}</h3>
                                    <p>{t('userContent.privacyControl.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('userContent.moderation.title')}</h3>
                                    <p className="mb-4">{t('userContent.moderation.content')}</p>

                                    <div className="ml-6 space-y-2">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">{t('userContent.moderation.repeatInfringement.title')}</h4>
                                            <p>{t('userContent.moderation.repeatInfringement.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">{t('userContent.moderation.abuseReporting.title')}</h4>
                                            <p>{t('userContent.moderation.abuseReporting.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">{t('userContent.moderation.preservationCopies.title')}</h4>
                                            <p>{t('userContent.moderation.preservationCopies.content')}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">{t('userContent.moderation.automatedAnalysis.title')}</h4>
                                            <p>{t('userContent.moderation.automatedAnalysis.content')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* User Content Summary */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('userContentSummary.title')}</h2>
                            <p>{t('userContentSummary.content')}</p>
                        </section>

                        {/* Indemnification */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('indemnification.title')}</h2>
                            <p>{t('indemnification.content')}</p>
                        </section>

                        {/* Warranty Disclaimers */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('warrantyDisclaimers.title')}</h2>
                            <p className="mb-4">{t('warrantyDisclaimers.intro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('warrantyDisclaimers.asIs.title')}</h3>
                                    <p>{t('warrantyDisclaimers.asIs.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('warrantyDisclaimers.noUninterrupted.title')}</h3>
                                    <p>{t('warrantyDisclaimers.noUninterrupted.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('warrantyDisclaimers.accuracyInfo.title')}</h3>
                                    <p>{t('warrantyDisclaimers.accuracyInfo.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('warrantyDisclaimers.securityViruses.title')}</h3>
                                    <p>{t('warrantyDisclaimers.securityViruses.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('warrantyDisclaimers.advertisingThirdParty.title')}</h3>
                                    <p>{t('warrantyDisclaimers.advertisingThirdParty.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('warrantyDisclaimers.consumerRights.title')}</h3>
                                    <p>{t('warrantyDisclaimers.consumerRights.content')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('limitationLiability.title')}</h2>
                            <p className="mb-4">{t('limitationLiability.content')}</p>
                            <p>{t('limitationLiability.content2')}</p>
                        </section>

                        {/* Specific Circumstances */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('specificCircumstances.title')}</h2>
                            <p className="mb-4">{t('specificCircumstances.intro')}</p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('specificCircumstances.advertising.title')}</h3>
                                    <p>{t('specificCircumstances.advertising.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('specificCircumstances.serviceChanges.title')}</h3>
                                    <p>{t('specificCircumstances.serviceChanges.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('specificCircumstances.contentStorage.title')}</h3>
                                    <p>{t('specificCircumstances.contentStorage.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('specificCircumstances.accountInfo.title')}</h3>
                                    <p>{t('specificCircumstances.accountInfo.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('specificCircumstances.security.title')}</h3>
                                    <p>{t('specificCircumstances.security.content')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Personal Use */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('personalUse.title')}</h2>
                            <p className="mb-4">{t('personalUse.content')}</p>
                            <p className="mb-4">{t('personalUse.content2')}</p>
                            <p className="mb-4">{t('personalUse.content3')}</p>
                            <p>{t('personalUse.content4')}</p>
                        </section>

                        {/* Third Party Charges */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('thirdPartyCharges.title')}</h2>
                            <p>{t('thirdPartyCharges.content')}</p>
                        </section>

                        {/* Class Action Waiver */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('classActionWaiver.title')}</h2>
                            <p>{t('classActionWaiver.content')}</p>
                        </section>

                        {/* Miscellaneous */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">{t('miscellaneous.title')}</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('miscellaneous.governingLaw.title')}</h3>
                                    <p>{t('miscellaneous.governingLaw.content')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{t('miscellaneous.unsolicitedMaterials.title')}</h3>
                                    <p className="mb-4">{t('miscellaneous.unsolicitedMaterials.content')}</p>
                                    <p>{t('miscellaneous.unsolicitedMaterials.content2')}</p>

                                    <div className="ml-6 mt-4">
                                        <h4 className="text-lg font-semibold mb-2 text-white">{t('miscellaneous.unsolicitedMaterials.helpSupport.title')}</h4>
                                        <p>{t('miscellaneous.unsolicitedMaterials.helpSupport.content')}</p>
                                    </div>

                                    <div className="ml-6 mt-4">
                                        <h4 className="text-lg font-semibold mb-2 text-white">{t('miscellaneous.unsolicitedMaterials.validityModifications.title')}</h4>
                                        <p className="mb-4">{t('miscellaneous.unsolicitedMaterials.validityModifications.content')}</p>
                                        <p className="mb-4">{t('miscellaneous.unsolicitedMaterials.validityModifications.content2')}</p>

                                        <div className="ml-6 space-y-2">
                                            <div>
                                                <h5 className="text-base font-semibold mb-1 text-white">{t('miscellaneous.unsolicitedMaterials.validityModifications.assignment.title')}</h5>
                                                <p>{t('miscellaneous.unsolicitedMaterials.validityModifications.assignment.content')}</p>
                                            </div>

                                            <div>
                                                <h5 className="text-base font-semibold mb-1 text-white">{t('miscellaneous.unsolicitedMaterials.validityModifications.forceMajeure.title')}</h5>
                                                <p>{t('miscellaneous.unsolicitedMaterials.validityModifications.forceMajeure.content')}</p>
                                            </div>

                                            <div>
                                                <h5 className="text-base font-semibold mb-1 text-white">{t('miscellaneous.unsolicitedMaterials.validityModifications.electronicCommunications.title')}</h5>
                                                <p>{t('miscellaneous.unsolicitedMaterials.validityModifications.electronicCommunications.content')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
                            <p className="text-sm text-gray-400">
                                <strong>{t('lastUpdate')}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 