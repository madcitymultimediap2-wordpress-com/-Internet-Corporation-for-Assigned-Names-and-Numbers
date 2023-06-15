import { useTranslate } from 'i18n-calypso';
import DocumentHead from 'calypso/components/data/document-head';
import FormattedHeader from 'calypso/components/formatted-header';
import Main from 'calypso/components/main';
import {
	SiteSubscriptionsManager as ExternalSiteSubscriptionsManager,
	SiteSubscriptionsManagerProvider,
} from 'calypso/landing/subscriptions/components/site-subscriptions-manager';
import {
	SubscriptionManagerContextProvider,
	ReaderPortal,
} from 'calypso/landing/subscriptions/components/subscription-manager-context';
import { RecommendedSites } from 'calypso/reader/recommended-sites';
import type { SubscriptionManagerContext } from 'calypso/landing/subscriptions/components/subscription-manager-context';

import './style.scss';

const SiteSubscriptionsManager = () => {
	const translate = useTranslate();
	const context: SubscriptionManagerContext = {
		portal: ReaderPortal,
	};
	return (
		<SubscriptionManagerContextProvider { ...context }>
			<Main className="site-subscriptions-manager">
				{ /* todo: translate document title */ }
				<DocumentHead title="Site subscriptions" />
				<FormattedHeader
					headerText={ translate( 'Manage subscribed sites' ) }
					subHeaderText={ translate( 'Manage your newsletter and blog subscriptions.' ) }
					align="left"
				/>
				<SiteSubscriptionsManagerProvider>
					<ExternalSiteSubscriptionsManager>
						<ExternalSiteSubscriptionsManager.ListActionsBar />
						<RecommendedSites />
						<ExternalSiteSubscriptionsManager.List onSiteTitleClick={ () => undefined } />
					</ExternalSiteSubscriptionsManager>
				</SiteSubscriptionsManagerProvider>
			</Main>
		</SubscriptionManagerContextProvider>
	);
};

export default SiteSubscriptionsManager;
