/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, SimpleEmitter, Table, TD, TH, TBODY, THEAD, TR, cloneChildren} from 'react-starter-components';
import extend from 'lodash/extend'
import clone from 'lodash/clone'
import omit from 'lodash/omit'

const records = [{
    id: 1,
    first_name: 'Tobey',
    last_name: 'Gamage',
    email: 'tgamage0@nasa.gov',
    gender: 'Female',
    ip_address: '121.227.133.10'
}, {
    id: 2,
    first_name: 'Felita',
    last_name: 'Ingall',
    email: 'fingall1@blogger.com',
    gender: 'Female',
    ip_address: '107.200.177.64'
}, {
    id: 3,
    first_name: 'Reed',
    last_name: 'Fearenside',
    email: 'rfearenside2@si.edu',
    gender: 'Male',
    ip_address: '133.129.193.179'
}, {
    id: 4,
    first_name: 'Sal',
    last_name: "O'Hdirscoll",
    email: 'sohdirscoll3@fastcompany.com',
    gender: 'Female',
    ip_address: '31.215.121.64'
}, {
    id: 5,
    first_name: 'Mariele',
    last_name: 'Stuchbury',
    email: 'mstuchbury4@icio.us',
    gender: 'Female',
    ip_address: '22.193.208.212'
}, {
    id: 6,
    first_name: 'Roberto',
    last_name: 'Gouldthorpe',
    email: 'rgouldthorpe5@hud.gov',
    gender: 'Male',
    ip_address: '171.69.85.58'
}, {
    id: 7,
    first_name: 'Carlotta',
    last_name: 'Blazek',
    email: 'cblazek6@cyberchimps.com',
    gender: 'Female',
    ip_address: '19.194.192.219'
}, {
    id: 8,
    first_name: 'Norman',
    last_name: 'Lippitt',
    email: 'nlippitt7@tamu.edu',
    gender: 'Male',
    ip_address: '73.24.21.209'
}, {
    id: 9,
    first_name: 'Dewie',
    last_name: 'Summerly',
    email: 'dsummerly8@foxnews.com',
    gender: 'Male',
    ip_address: '78.141.155.76'
}, {
    id: 10,
    first_name: 'Jackqueline',
    last_name: 'Brunon',
    email: 'jbrunon9@noaa.gov',
    gender: 'Female',
    ip_address: '9.69.186.37'
}, {
    id: 11,
    first_name: 'Andros',
    last_name: 'Berthod',
    email: 'aberthoda@cmu.edu',
    gender: 'Male',
    ip_address: '132.50.62.188'
}, {
    id: 12,
    first_name: 'Lilah',
    last_name: 'Ebbers',
    email: 'lebbersb@privacy.gov.au',
    gender: 'Female',
    ip_address: '119.80.236.111'
}, {
    id: 13,
    first_name: 'Pascal',
    last_name: 'Timcke',
    email: 'ptimckec@tiny.cc',
    gender: 'Male',
    ip_address: '139.24.11.178'
}, {
    id: 14,
    first_name: 'Erena',
    last_name: 'Stubbs',
    email: 'estubbsd@live.com',
    gender: 'Female',
    ip_address: '190.104.249.135'
}, {
    id: 15,
    first_name: 'Herculie',
    last_name: 'Stean',
    email: 'hsteane@si.edu',
    gender: 'Male',
    ip_address: '243.116.189.6'
}, {
    id: 16,
    first_name: 'Charity',
    last_name: 'Esseby',
    email: 'cessebyf@creativecommons.org',
    gender: 'Female',
    ip_address: '106.38.228.100'
}, {
    id: 17,
    first_name: 'Ferguson',
    last_name: 'Juszkiewicz',
    email: 'fjuszkiewiczg@blogspot.com',
    gender: 'Male',
    ip_address: '200.24.97.206'
}, {
    id: 18,
    first_name: 'Berkeley',
    last_name: 'Drains',
    email: 'bdrainsh@sakura.ne.jp',
    gender: 'Male',
    ip_address: '113.90.186.162'
}, {
    id: 19,
    first_name: 'Emanuel',
    last_name: 'Rubenczyk',
    email: 'erubenczyki@elegantthemes.com',
    gender: 'Male',
    ip_address: '203.84.34.150'
}, {
    id: 20,
    first_name: 'Timmy',
    last_name: 'Victor',
    email: 'tvictorj@github.io',
    gender: 'Female',
    ip_address: '180.150.34.111'
}, {
    id: 21,
    first_name: 'Lorenza',
    last_name: "O'Brian",
    email: 'lobriank@amazon.co.uk',
    gender: 'Female',
    ip_address: '99.46.167.224'
}, {
    id: 22,
    first_name: 'Tina',
    last_name: 'Stooke',
    email: 'tstookel@mediafire.com',
    gender: 'Female',
    ip_address: '4.167.57.228'
}, {
    id: 23,
    first_name: 'Cariotta',
    last_name: 'Kingscote',
    email: 'ckingscotem@ftc.gov',
    gender: 'Female',
    ip_address: '100.52.58.82'
}, {
    id: 24,
    first_name: 'Lauryn',
    last_name: 'Falkingham',
    email: 'lfalkinghamn@vinaora.com',
    gender: 'Female',
    ip_address: '219.221.144.149'
}, {
    id: 25,
    first_name: 'Cecilia',
    last_name: 'Penney',
    email: 'cpenneyo@arstechnica.com',
    gender: 'Female',
    ip_address: '91.149.85.11'
}, {
    id: 26,
    first_name: 'Otes',
    last_name: 'Braban',
    email: 'obrabanp@economist.com',
    gender: 'Male',
    ip_address: '247.209.51.0'
}, {
    id: 27,
    first_name: 'Hans',
    last_name: 'Buxsey',
    email: 'hbuxseyq@berkeley.edu',
    gender: 'Male',
    ip_address: '95.238.60.209'
}, {
    id: 28,
    first_name: 'Halsey',
    last_name: 'Petrov',
    email: 'hpetrovr@sphinn.com',
    gender: 'Male',
    ip_address: '90.59.130.40'
}, {
    id: 29,
    first_name: 'Lurette',
    last_name: 'Isley',
    email: 'lisleys@blogs.com',
    gender: 'Female',
    ip_address: '43.82.110.1'
}, {
    id: 30,
    first_name: 'Otto',
    last_name: 'Shortland',
    email: 'oshortlandt@biglobe.ne.jp',
    gender: 'Male',
    ip_address: '197.223.206.50'
}, {
    id: 31,
    first_name: 'Marlena',
    last_name: 'Orr',
    email: 'morru@yandex.ru',
    gender: 'Female',
    ip_address: '198.233.52.177'
}, {
    id: 32,
    first_name: 'Victoria',
    last_name: 'Aspinwall',
    email: 'vaspinwallv@google.co.jp',
    gender: 'Female',
    ip_address: '71.113.213.89'
}, {
    id: 33,
    first_name: 'Mordy',
    last_name: 'Sieghart',
    email: 'msieghartw@google.pl',
    gender: 'Male',
    ip_address: '7.237.49.188'
}, {
    id: 34,
    first_name: 'Maureen',
    last_name: 'Karlolczak',
    email: 'mkarlolczakx@lycos.com',
    gender: 'Female',
    ip_address: '189.128.248.152'
}, {
    id: 35,
    first_name: 'Andrus',
    last_name: 'Castillou',
    email: 'acastillouy@ezinearticles.com',
    gender: 'Male',
    ip_address: '113.5.121.12'
}, {
    id: 36,
    first_name: 'Vikky',
    last_name: 'Luno',
    email: 'vlunoz@dion.ne.jp',
    gender: 'Female',
    ip_address: '95.11.251.132'
}, {
    id: 37,
    first_name: 'Yolande',
    last_name: 'Furze',
    email: 'yfurze10@blogspot.com',
    gender: 'Female',
    ip_address: '12.242.123.56'
}, {
    id: 38,
    first_name: 'Pennie',
    last_name: 'Bagby',
    email: 'pbagby11@jugem.jp',
    gender: 'Male',
    ip_address: '52.203.195.104'
}, {
    id: 39,
    first_name: 'Renato',
    last_name: 'Shiels',
    email: 'rshiels12@walmart.com',
    gender: 'Male',
    ip_address: '47.174.3.195'
}, {
    id: 40,
    first_name: 'Ganny',
    last_name: 'Burds',
    email: 'gburds13@seesaa.net',
    gender: 'Male',
    ip_address: '83.220.227.64'
}, {
    id: 41,
    first_name: 'Evanne',
    last_name: 'Huffadine',
    email: 'ehuffadine14@unicef.org',
    gender: 'Female',
    ip_address: '243.161.26.208'
}, {
    id: 42,
    first_name: 'Griff',
    last_name: 'Agglione',
    email: 'gagglione15@yellowbook.com',
    gender: 'Male',
    ip_address: '118.143.116.232'
}, {
    id: 43,
    first_name: 'Jordon',
    last_name: 'Austing',
    email: 'jausting16@biblegateway.com',
    gender: 'Male',
    ip_address: '112.112.99.186'
}, {
    id: 44,
    first_name: 'Travers',
    last_name: 'Greeveson',
    email: 'tgreeveson17@craigslist.org',
    gender: 'Male',
    ip_address: '41.130.40.30'
}, {
    id: 45,
    first_name: 'Caron',
    last_name: 'Treweela',
    email: 'ctreweela18@nih.gov',
    gender: 'Female',
    ip_address: '80.63.153.20'
}, {
    id: 46,
    first_name: 'Anjela',
    last_name: 'Tout',
    email: 'atout19@amazon.com',
    gender: 'Female',
    ip_address: '22.121.166.149'
}, {
    id: 47,
    first_name: 'Meggi',
    last_name: 'Carle',
    email: 'mcarle1a@pagesperso-orange.fr',
    gender: 'Female',
    ip_address: '226.100.102.41'
}, {
    id: 48,
    first_name: 'Latrena',
    last_name: 'Daltrey',
    email: 'ldaltrey1b@illinois.edu',
    gender: 'Female',
    ip_address: '116.46.7.64'
}, {
    id: 49,
    first_name: 'Sergent',
    last_name: 'Rabbitts',
    email: 'srabbitts1c@sina.com.cn',
    gender: 'Male',
    ip_address: '142.85.200.186'
}, {
    id: 50,
    first_name: 'Kingsley',
    last_name: 'Thornally',
    email: 'kthornally1d@ocn.ne.jp',
    gender: 'Male',
    ip_address: '219.185.220.47'
}, {
    id: 51,
    first_name: 'Antonetta',
    last_name: 'Thunder',
    email: 'athunder1e@opensource.org',
    gender: 'Female',
    ip_address: '57.25.99.50'
}, {
    id: 52,
    first_name: 'Vally',
    last_name: 'Wodeland',
    email: 'vwodeland1f@4shared.com',
    gender: 'Female',
    ip_address: '246.153.83.229'
}, {
    id: 53,
    first_name: 'Stearne',
    last_name: 'Bellhanger',
    email: 'sbellhanger1g@google.com.br',
    gender: 'Male',
    ip_address: '236.165.248.137'
}, {
    id: 54,
    first_name: 'Dilly',
    last_name: 'Imesen',
    email: 'dimesen1h@slashdot.org',
    gender: 'Male',
    ip_address: '211.19.70.22'
}, {
    id: 55,
    first_name: 'Whit',
    last_name: 'Messiter',
    email: 'wmessiter1i@latimes.com',
    gender: 'Male',
    ip_address: '230.147.164.80'
}, {
    id: 56,
    first_name: 'Bambie',
    last_name: 'Guyet',
    email: 'bguyet1j@plala.or.jp',
    gender: 'Female',
    ip_address: '38.27.54.164'
}, {
    id: 57,
    first_name: 'Selia',
    last_name: 'Yanshin',
    email: 'syanshin1k@apache.org',
    gender: 'Female',
    ip_address: '39.142.52.173'
}, {
    id: 58,
    first_name: 'Annalise',
    last_name: 'Kramer',
    email: 'akramer1l@blogs.com',
    gender: 'Female',
    ip_address: '127.13.97.227'
}, {
    id: 59,
    first_name: 'Mercedes',
    last_name: 'McCaghan',
    email: 'mmccaghan1m@comcast.net',
    gender: 'Female',
    ip_address: '129.80.18.246'
}, {
    id: 60,
    first_name: 'Cassie',
    last_name: 'Hellin',
    email: 'chellin1n@myspace.com',
    gender: 'Male',
    ip_address: '202.202.27.32'
}, {
    id: 61,
    first_name: 'Laurent',
    last_name: 'Rolstone',
    email: 'lrolstone1o@apache.org',
    gender: 'Male',
    ip_address: '35.212.244.33'
}, {
    id: 62,
    first_name: 'Jedd',
    last_name: 'Haimes',
    email: 'jhaimes1p@tripadvisor.com',
    gender: 'Male',
    ip_address: '87.38.86.141'
}, {
    id: 63,
    first_name: 'Gretal',
    last_name: 'Dyke',
    email: 'gdyke1q@nytimes.com',
    gender: 'Female',
    ip_address: '132.134.246.242'
}, {
    id: 64,
    first_name: 'Berrie',
    last_name: 'Asplen',
    email: 'basplen1r@stumbleupon.com',
    gender: 'Female',
    ip_address: '127.108.251.247'
}, {
    id: 65,
    first_name: 'Sheelah',
    last_name: 'Paulack',
    email: 'spaulack1s@microsoft.com',
    gender: 'Female',
    ip_address: '121.13.23.103'
}, {
    id: 66,
    first_name: 'Vinita',
    last_name: 'Plott',
    email: 'vplott1t@yahoo.co.jp',
    gender: 'Female',
    ip_address: '244.6.182.156'
}, {
    id: 67,
    first_name: 'Herschel',
    last_name: 'Walsom',
    email: 'hwalsom1u@google.nl',
    gender: 'Male',
    ip_address: '119.162.6.51'
}, {
    id: 68,
    first_name: 'Marchall',
    last_name: 'Fevier',
    email: 'mfevier1v@gov.uk',
    gender: 'Male',
    ip_address: '46.157.35.50'
}, {
    id: 69,
    first_name: 'Jacqueline',
    last_name: 'Fairy',
    email: 'jfairy1w@theglobeandmail.com',
    gender: 'Female',
    ip_address: '199.226.89.81'
}, {
    id: 70,
    first_name: 'Davidde',
    last_name: 'Grabb',
    email: 'dgrabb1x@wired.com',
    gender: 'Male',
    ip_address: '113.184.57.204'
}, {
    id: 71,
    first_name: 'Worthington',
    last_name: 'Quartermaine',
    email: 'wquartermaine1y@addthis.com',
    gender: 'Male',
    ip_address: '6.222.249.25'
}, {
    id: 72,
    first_name: 'Cymbre',
    last_name: 'Billison',
    email: 'cbillison1z@google.co.jp',
    gender: 'Female',
    ip_address: '214.127.120.70'
}, {
    id: 73,
    first_name: 'Bunny',
    last_name: 'Hunday',
    email: 'bhunday20@dyndns.org',
    gender: 'Female',
    ip_address: '197.13.248.187'
}, {
    id: 74,
    first_name: 'Marris',
    last_name: 'Bacup',
    email: 'mbacup21@marketwatch.com',
    gender: 'Female',
    ip_address: '192.161.240.36'
}, {
    id: 75,
    first_name: 'Meredith',
    last_name: 'Lorentzen',
    email: 'mlorentzen22@blogspot.com',
    gender: 'Female',
    ip_address: '219.184.65.239'
}, {
    id: 76,
    first_name: 'Biron',
    last_name: 'Simoncelli',
    email: 'bsimoncelli23@gnu.org',
    gender: 'Male',
    ip_address: '89.23.147.27'
}, {
    id: 77,
    first_name: 'Debi',
    last_name: 'Rugieri',
    email: 'drugieri24@answers.com',
    gender: 'Female',
    ip_address: '140.88.37.60'
}, {
    id: 78,
    first_name: 'Artemis',
    last_name: 'Grisenthwaite',
    email: 'agrisenthwaite25@nymag.com',
    gender: 'Male',
    ip_address: '44.203.218.102'
}, {
    id: 79,
    first_name: 'Joly',
    last_name: 'Gillott',
    email: 'jgillott26@ucoz.com',
    gender: 'Female',
    ip_address: '166.64.201.114'
}, {
    id: 80,
    first_name: 'Krystal',
    last_name: 'Corkell',
    email: 'kcorkell27@clickbank.net',
    gender: 'Female',
    ip_address: '49.241.56.136'
}, {
    id: 81,
    first_name: 'Woodie',
    last_name: 'Dix',
    email: 'wdix28@cnet.com',
    gender: 'Male',
    ip_address: '89.151.179.22'
}, {
    id: 82,
    first_name: 'Torrie',
    last_name: 'Jerdein',
    email: 'tjerdein29@dot.gov',
    gender: 'Female',
    ip_address: '16.251.246.83'
}, {
    id: 83,
    first_name: 'Shanan',
    last_name: 'Phin',
    email: 'sphin2a@comsenz.com',
    gender: 'Male',
    ip_address: '46.233.71.176'
}, {
    id: 84,
    first_name: 'Reginauld',
    last_name: 'Tabourier',
    email: 'rtabourier2b@mail.ru',
    gender: 'Male',
    ip_address: '201.75.123.136'
}, {
    id: 85,
    first_name: 'Dania',
    last_name: 'Renvoise',
    email: 'drenvoise2c@bizjournals.com',
    gender: 'Female',
    ip_address: '41.17.92.113'
}, {
    id: 86,
    first_name: 'Katinka',
    last_name: 'Camacke',
    email: 'kcamacke2d@ehow.com',
    gender: 'Female',
    ip_address: '194.250.61.190'
}, {
    id: 87,
    first_name: 'Diahann',
    last_name: 'Ozintsev',
    email: 'dozintsev2e@yolasite.com',
    gender: 'Female',
    ip_address: '213.115.255.98'
}, {
    id: 88,
    first_name: 'Jerad',
    last_name: 'Bromehed',
    email: 'jbromehed2f@microsoft.com',
    gender: 'Male',
    ip_address: '250.165.6.111'
}, {
    id: 89,
    first_name: 'Darell',
    last_name: 'Scardifeild',
    email: 'dscardifeild2g@mit.edu',
    gender: 'Female',
    ip_address: '6.172.193.72'
}, {
    id: 90,
    first_name: 'Janie',
    last_name: 'Livermore',
    email: 'jlivermore2h@psu.edu',
    gender: 'Female',
    ip_address: '111.230.9.165'
}, {
    id: 91,
    first_name: 'Ailis',
    last_name: 'Busch',
    email: 'abusch2i@hugedomains.com',
    gender: 'Female',
    ip_address: '203.223.211.170'
}, {
    id: 92,
    first_name: 'Lil',
    last_name: 'Lyver',
    email: 'llyver2j@sitemeter.com',
    gender: 'Female',
    ip_address: '66.126.89.76'
}, {
    id: 93,
    first_name: 'Tiffy',
    last_name: 'Haldin',
    email: 'thaldin2k@pen.io',
    gender: 'Female',
    ip_address: '159.46.166.24'
}, {
    id: 94,
    first_name: 'Vern',
    last_name: 'Phythien',
    email: 'vphythien2l@timesonline.co.uk',
    gender: 'Male',
    ip_address: '55.240.106.119'
}, {
    id: 95,
    first_name: 'Giacobo',
    last_name: 'Livesay',
    email: 'glivesay2m@princeton.edu',
    gender: 'Male',
    ip_address: '4.201.122.46'
}, {
    id: 96,
    first_name: 'Robby',
    last_name: 'Paulucci',
    email: 'rpaulucci2n@shop-pro.jp',
    gender: 'Male',
    ip_address: '116.189.186.109'
}, {
    id: 97,
    first_name: 'Boothe',
    last_name: 'Cicconettii',
    email: 'bcicconettii2o@toplist.cz',
    gender: 'Male',
    ip_address: '81.107.216.197'
}];


let paginationDefaults = {
    start: 1,
    offset: 20,
    sortKey: '_id',
    sortOrder: 'dsc',
    filterKey: '',
    filterQuery: '',
    totalRecords: 0
}

class PaginationManager extends SimpleEmitter {
    constructor(config) {
        super(config);
        this.config = extend({}, paginationDefaults, config);
        this.computeOtherConfigs();
    }

    setConfig(map, isSilent) {
        this.config = extend(this.config, map);
        this.computeOtherConfigs();
        if(!isSilent){
            this.triggerChange();
        }
    }

    computeOtherConfigs() {
        let computed = {};
        let {start, offset, totalRecords} = this.config;
        computed['end'] = Math.min(start + offset - 1, totalRecords);
        computed['hasNext'] = computed['end'] < totalRecords;
        computed['hasPrev'] = start > 1;
        computed['showPagination'] = totalRecords > offset;
        this.config = extend(this.config, computed);
    }

    bumpPage(diff) {
        let {start, offset, totalRecords} = this.config;
        this.setConfig({start: start + (diff * offset)});
    }

    nextPage() {
        if (this.config.hasNext) {
            this.bumpPage(1);
        }
    }

    prevPage() {
        if (this.config.hasPrev) {
            this.bumpPage(-1);
        }
    }

    triggerChange() {
        this.trigger('change', this.config);
    }

    getConfig() {
        return clone(this.config);
    }
}

class PaginationWrapper extends Component {
    constructor(props) {
        super(props);
        this.paginationManager = new PaginationManager({...omit(props, 'children', 'records'),totalRecords: props.records.length})
    }

    componentWillMount() {
        let paginationManager = this.paginationManager;
        this.paginationSubscription = paginationManager.on('change', this.paginationChangeHandler.bind(this));
    }

    componentWillUnmount() {
        this.paginationSubscription && this.paginationSubscription();
    }

    paginationChangeHandler() {
        this.forceUpdate();
    }

    getProcessedRecords() {
        let {start, offset, end} = this.paginationManager.getConfig();
        return this.props.records.slice(start - 1, end);
    }

    render() {
        let props = this.paginationManager.getConfig();
        props.records = this.getProcessedRecords();
        props.paginationManager = this.paginationManager;
        let clonedChildren = cloneChildren(this.props.children, props);
        return <div>{clonedChildren}</div>;
    }
}


class ServerSidePaginationWrapper extends Component {
    constructor(props) {
        super(props);
        this.paginationManager = new PaginationManager({...omit(props, 'children')})
    }

    componentWillMount() {
        let paginationManager = this.paginationManager;
        this.paginationSubscription = paginationManager.on('change', this.paginationChangeHandler.bind(this));
    }

    componentWillUnmount() {
        this.paginationSubscription && this.paginationSubscription();
    }

    paginationChangeHandler() {
        this.forceUpdate();
    }

    render() {
        let props = this.paginationManager.getConfig();
        props.paginationManager = this.paginationManager;
        let clonedChildren = cloneChildren(this.props.children, props);
        return clonedChildren
    }
}

class TMPWrapper extends SmartWrapper {
    renderChildren() {
        let {paginationManager} = this.props;
        paginationManager.setConfig({totalRecords:this.dataIndex.totalRecords}, true)
        let props = paginationManager.getConfig();
        props.paginationManager = this.props.paginationManager;
        let clonedChildren = cloneChildren(this.props.children, {...this.dataIndex, ...props});
        return <div>{clonedChildren}</div>
    }
}

class Pagination extends Component {
    prevClick(e) {
        e.preventDefault();
        this.props.paginationManager.prevPage();
    }

    nextClick(e) {
        e.preventDefault();
        this.props.paginationManager.nextPage();
    }

    render() {
        let {paginationManager, children, totalRecords} = this.props;
        let props = paginationManager.getConfig();
        if (!props.showPagination) {
            return null;
        }
        return <div className="pagination">
            <div>{props.start} to {props.end} of {totalRecords}</div>
            <div>
                {props.hasPrev ? <a href="#" onClick={this.prevClick.bind(this)}>Prev</a> : null}
                {props.hasNext ? <a href="#" onClick={this.nextClick.bind(this)}>Next</a> : null}
            </div>
        </div>;
    }
}


const getInventoryUsersConfig = {
    dataRequests: [{
        requestId: 'getInventoryUsers',
        propKey: ['records', 'totalRecords'],
        propDependencies: ['start', 'offset'],
        getParams: (props) => {
            return props.paginationManager.getConfig()
        }
    }]
}


class ClientSideTableExample extends Component {

    render() {
        return <div className="paginated-table">
            <PaginationWrapper records={records} offset={10}>
                <Table>
                    <THEAD>
                    <TR>
                        <TH label="Name"></TH>
                        <TH label="Gender"></TH>
                        <TH label="Email"></TH>
                    </TR>
                    </THEAD>
                    <TBODY>
                    <TR>
                        <TD dataKey="first_name"></TD>
                        <TD dataKey="gender"></TD>
                        <TD dataKey="email"></TD>
                    </TR>
                    </TBODY>
                </Table>
                <Pagination></Pagination>
            </PaginationWrapper>

        </div>
    }
}


class ServerSideTableExample extends Component {

    render() {
        return <div className="paginated-table">
            <ServerSidePaginationWrapper offset={10} app_id="596dbf9b98f3c2cdd876f8ce">
                <TMPWrapper {...getInventoryUsersConfig}>
                    <Table>
                        <THEAD>
                        <TR>
                            <TH label="Name"></TH>
                            <TH label="Gender"></TH>
                            <TH label="Email"></TH>
                        </TR>
                        </THEAD>
                        <TBODY>
                        <TR>
                            <TD dataKey="firstname"></TD>
                            <TD dataKey="gender"></TD>
                            <TD dataKey="email"></TD>
                        </TR>
                        </TBODY>
                    </Table>
                    <Pagination></Pagination>
                </TMPWrapper>
            </ServerSidePaginationWrapper>

        </div>
    }
}

export default class PaginatedTableExample extends SmartWrapper {
    render() {
        return <div>
            <h1>Client Paginated Table</h1>
            <ClientSideTableExample/>

             <h1>Server Paginated Table</h1>
            <ServerSideTableExample/>
        </div>
    }
}
