import Component from '@glimmer/component';

import { inject as service } from '@ember/service';
export default class WidgetQuickResourcesComponent extends Component {
    @service intl;
    get resources() {
        return [
        { label: this.intl.t('literal.developers.api-keys'), route: 'api-keys.index', icon: 'key' },
        { label: this.intl.t('literal.developers.webhooks'), route: 'webhooks.index', icon: 'globe' },
        { label: this.intl.t('literal.developers.logs'), route: 'logs.index', icon: 'terminal' },
        { label: this.intl.t('literal.developers.events'), route: 'events.index', icon: 'bolt' },
        { label: this.intl.t('literal.developers.sockets'), route: 'sockets.index', icon: 'plug' },
    ];
    }
}
