// プリザンター画面スクリプト API定義 TypeScrypt用
// このコードは以下コードを下地に実装させて頂いております。
// 
// https://github.com/Oooooomin2/Pleasanter_ECMAScript

interface Class  {
    ClassA: "",
    ClassB: "",
    ClassC: "",
    ClassD: "",
    ClassE: "",
    ClassF: "",
    ClassG: "",
    ClassH: "",
    ClassI: "",
    ClassJ: "",
    ClassK: "",
    ClassL: "",
    ClassM: "",
    ClassN: "",
    ClassO: "",
    ClassP: "",
    ClassQ: "",
    ClassR: "",
    ClassS: "",
    ClassT: "",
    ClassU: "",
    ClassV: "",
    ClassW: "",
    ClassX: "",
    ClassY: "",
    ClassZ: ""
};

 interface Num {
    NumA: 0,
    NumB: 0,
    NumC: 0,
    NumD: 0,
    NumE: 0,
    NumF: 0,
    NumG: 0,
    NumH: 0,
    NumI: 0,
    NumJ: 0,
    NumK: 0,
    NumL: 0,
    NumM: 0,
    NumN: 0,
    NumO: 0,
    NumP: 0,
    NumQ: 0,
    NumR: 0,
    NumS: 0,
    NumT: 0,
    NumU: 0,
    NumV: 0,
    NumW: 0,
    NumX: 0,
    NumY: 0,
    NumZ: 0
};

interface Date  {
    DateA : Date,
    DateB: Date,
    DateC: Date,
    DateD: Date,
    DateE: Date,
    DateF: Date,
    DateG: Date,
    DateH: Date,
    DateI: Date,
    DateJ: Date,
    DateK: Date,
    DateL: Date,
    DateM: Date,
    DateN: Date,
    DateO: Date,
    DateP: Date,
    DateQ: Date,
    DateR: Date,
    DateS: Date,
    DateT: Date,
    DateU: Date,
    DateV: Date,
    DateW: Date,
    DateX: Date,
    DateY: Date,
    DateZ: Date,
};

interface Description  {
    DescriptionA: "",
    DescriptionB: "",
    DescriptionC: "",
    DescriptionD: "",
    DescriptionE: "",
    DescriptionF: "",
    DescriptionG: "",
    DescriptionH: "",
    DescriptionI: "",
    DescriptionJ: "",
    DescriptionK: "",
    DescriptionL: "",
    DescriptionM: "",
    DescriptionN: "",
    DescriptionO: "",
    DescriptionP: "",
    DescriptionQ: "",
    DescriptionR: "",
    DescriptionS: "",
    DescriptionT: "",
    DescriptionU: "",
    DescriptionV: "",
    DescriptionW: "",
    DescriptionX: "",
    DescriptionY: "",
    DescriptionZ: ""
};

interface Check  {
    CheckA: true,
    CheckB: true,
    CheckC: true,
    CheckD: true,
    CheckE: true,
    CheckF: true,
    CheckG: true,
    CheckH: true,
    CheckI: true,
    CheckJ: true,
    CheckK: true,
    CheckL: true,
    CheckM: true,
    CheckN: true,
    CheckO: true,
    CheckP: true,
    CheckQ: true,
    CheckR: true,
    CheckS: true,
    CheckT: true,
    CheckU: true,
    CheckV: true,
    CheckW: true,
    CheckX: true,
    CheckY: true,
    CheckZ: true
};


/** プリザンターのAPI定義 */
interface PleasanterApiInterface {
    /*
    画面上の値変更と$p.dataへの格納を同時に行うことが出来るメソッドです。
    https://pleasanter.net/fs/publishes/523994/edit
    */
    //set: ($control, val) => $p.set($control, val),
    set ($control, val) :void,

    /*
    AjaxのPOSTリクエストによる値のレコード取得が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524012
    */
    apiGet( ref : getRequest):void,
    /*
    AjaxのPOSTリクエストによる新規レコードの作成が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524072/edit
    */
    apiCreate( createRequest):void,

    /*
    AjaxのPOSTリクエストによるレコード削除が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524076/edit
    */
    apiUpdate( updateRequest):void,

    /*
    AjaxのPOSTリクエストによるレコード削除が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524076
    */
    apiDelete(deleteRequest):void,

    /*
    AjaxのPOSTリクエストによるユーザ取得が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768085/edit
    */
    apiUsersGet(usersGetRequest):void,

    /*
    AjaxのPOSTリクエストによるユーザ作成が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768207/edit
    */
    apiUsersCreate( usersCreateRequest):void,

    /*
    AjaxのPOSTリクエストによるユーザの更新が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768263/edit
    */
    apiUsersUpdate(usersUpdateRequest):void,

    /*
    AjaxのPOSTリクエストによるユーザの削除が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768274/edit
    */
    apiUsersDelete(usersDeleteRequest):void,

    /*
    AjaxのPOSTリクエストによるメールの送信が可能なメソッドです。
    マニュアルは近日公開されるかと思います。
    */
    apiSendMail(sendMailRequest):void,

    /*
    レコードのIdを表示します。
    https://pleasanter.net/fs/publishes/523872/edit
    */
   // id: () => $p.id(),
   id():number

    /*
    サーバにデータを送信するメソッドです。
    マニュアルはいつか公開されるかと思います。
    */
    //send: data => $p.send(data),

    /*
    サイトのidを表示します。
    https://pleasanter.net/fs/publishes/524917/edit
    */
    //siteId: () => $p.siteId(),
    siteId():number,

    /*
    対象項目のカラム名（データベースの列名）を取得するメソッドです。
    https://pleasanter.net/fs/publishes/523992
    */
    //getColumnName: name => $p.getColumnName(name),
    getColumnName(name):string,

    /*
    対象の項目名から要素を取得するメソッドです。
    https://pleasanter.net/fs/publishes/523996/edit
    */
   // getControl: labelName => $p.getControl(labelName),

    /*
    対象の項目名からFieldを取得するメソッドです。
    https://pleasanter.net/fs/publishes/617813/edit
    */
    //getField: labelName => $p.getField(labelName),

    /*
    画面下に表示されるメッセージを削除することができるメソッドです。
    https://pleasanter.net/fs/publishes/524707/edit
    */
    //clearMessage: () => $p.clearMessage(),
    clearMessage ():void,
    /*
    画面下にメッセージを表示させるメソッドです。
    https://pleasanter.net/fs/publishes/524716
    */
    //setMessage: (target, value) => $p.setMessage(target, value),

    /*
    ログインIdを取得するメソッドです。
    https://pleasanter.net/fs/publishes/527928/edit
    */
    //loginId: () => $p.loginId(),
    loginId ():number,
    /*
    ログインしているユーザのユーザIdを取得するメソッドです。
    https://pleasanter.net/fs/publishes/527943/edit
    */
    //userId: () => $p.userId(),
    userId ():number,

    /*
    ログインしているユーザの名前を取得するメソッドです。
    https://pleasanter.net/fs/publishes/527948/edit
    */
    //userName: () => $p.userName(),

    /*
    テーブルの種類を取得するメソッドです。
    マニュアルはいつか公開されるかと思います。
    */
    //referenceType: () => $p.referenceType(),

    /*
    一覧画面のtdタグの要素を取得するメソッドです。
    https://pleasanter.net/fs/publishes/533695/edit
    */
    //getGridCell: (id, name) => $p.getGridCell(id, name),

    /*
    一覧画面にて、レコードの表示名のデータが何列目にあるか取得するメソッドです。
    https://pleasanter.net/fs/publishes/533699/edit
    */
    //getGridColumnIndex: name => $p.getGridColumnIndex(name),

    /*
    一覧画面にて、レコードの表示名のデータが何列目にあるか取得するメソッドです。
    https://pleasanter.net/fs/publishes/533714
    */
    //getGridRow: id => $p.getGridRow(id),

    events: {
        /*
        バリデーションチェックを行う前に実行するメソッドです。
        https://pleasanter.net/fs/publishes/522549/edit
        */
        before_validate_Create:()=>void,
        before_validate_Update:()=>void,
        before_validate_Delete:()=>void,
        before_validate_BulkDelete:()=>void,
        before_validate_BulkUpdate:()=>void,

        /*
        バリデーションチェックを行った後に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523850/edit
        */
        after_validate_Create:()=>void,
        after_validate_Update:()=>void,
        after_validate_Delete:()=>void,
        after_validate_BulkDelete:()=>void,
        after_validate_BulkUpdate:()=>void,

        /*
        サーバへデータを送信する前に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523851/edit
        */
        before_send_Create:()=>void,
        before_send_Update:()=>void,
        before_send_Delete:()=>void,
        before_send_BulkDelete:()=>void,
        before_send_BulkUpdate:()=>void,

        /*
        サーバへデータを送信した後に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523852/edit
        */
        after_send_Create:()=>void,
        after_send_Update:()=>void,
        after_send_Delete:()=>void,
        after_send_BulkDelete:()=>void,
        after_send_BulkUpdate:()=>void,

        /*
        サーバへデータを送信後、画面内容を更新する前に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523853/edit
        */
        before_set_Create:()=>void,
        before_set_Update:()=>void,
        before_set_Delete:()=>void,
        before_set_BulkDelete:()=>void,
        before_set_BulkUpdate:()=>void,

        /*
        サーバへデータを送信後、画面内容を更新した後に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523854/edit
        */
        after_set_Create:()=>void,
        after_set_Update:()=>void,
        after_set_Delete:()=>void,
        after_set_GridRows:()=>void,
        after_set_BulkDelete:()=>void,
        after_set_BulkUpdate:()=>void,

        /*
        編集画面を読み込んだときに実行するメソッドです。
        https://pleasanter.net/fs/publishes/523855/edit
        */
        on_editor_load:()=>void,

        /*
        一覧画面を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドです。
        https://pleasanter.net/fs/publishes/523861/edit
        */
        on_grid_load:()=>void
    }
}



interface getRequest {
    async :boolean= true,
    id :number= 0,
    data : dataOfGetRequest?,
    done : (data : getResponseData) => void,
    fail : (data)  => void,
    always : (data) => void
}//) => $p.apiGet();

interface createRequest {
    async :boolean = true,
    id :boolean= 0,
    data : dataOfCreateAndUpdateRequest,
    done : (data) => void,
    fail  : (data) => void,
    always : (data) => void
}//) => $p.apiCreate();

interface updateRequest {
    async :boolean = true,
    id :number = 0,
    data :dataOfCreateAndUpdateRequest,
    done : (data) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiUpdate();

interface deleteRequest {
    async :boolean = true,
    id :number = 0,
    data : dataOfBaseRequest,
    done : (data) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiDelete();

interface usersGetRequest {
    async :boolean = true,
    data : dataOfUsersGetRequest,
    done : (data = getResponseData) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiUsersGet();

interface usersCreateRequest {
    async :boolean= true,
    data : dataOfUsersCreateAndUpdateRequest,
    done : (data) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiUsersCreate();

interface usersUpdateRequest {
    async :boolean = true,
    id :number= 0,
    data : dataOfUsersCreateAndUpdateRequest,
    done :( data ) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiUsersUpdate();

interface usersDeleteRequest {
    async :boolean = true,
    id :number= 0,
    data : dataOfBaseRequest,
    done : (data) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiUsersDelete();

interface sendMailRequest {
    async :boolean= true,
    id :number= 0,
    data : dataOfSendMailRequest,
    done : (data) => void,
    fail : (data) => void,
    always : (data) => void
}//) => $p.apiSendMail();

interface dataOfBaseRequest {
    ApiVersion :number = 1.1,
    ApiKey :string= ""
}//) => { };



 interface dataOfGetRequest  {
     
    ApiVersion?:  number | null,
    ApiKey?: string | null,
    
    View: ViewItems
};

interface dataOfUsersGetRequest  {
    ApiVersion: 1.1,
    ApiKey: "",
    View: ViewUsers
}

interface dataOfCreateAndUpdateRequest  {
    ApiVersion: 1.1,
    ApiKey: "",
    ClassHash: Class,
    NumHash: Num,
    DateHash: Date,
    DescriptionHash: Description,
    CheckHash: Check,
    Title: "",
    Body: "",
    StartTime,
    CompletionTime,
    WorkValue,
    ProgressRate,
    RemainingWorkValue,
    Status: 0,
    Manager: 0,
    Owner: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    ItemTitle: ""
};

interface dataOfUsersCreateAndUpdateRequest {
    ApiVersion: 1.1,
    ApiKey: "",
    UserId: 0,
    Ver,
    LoginId: "",
    Name: "",
    UserCode: "",
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode: "",
    Body: "",
    LastLoginTime,
    Password: "",
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins: 0,
    NumberOfDenial: 0,
    TenantManager,
    Disabled,
    Lockout: true,
    LockoutCounter: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    UpdatedTime
};

interface dataOfSendMailRequest  {
    ApiVersion: 1.1,
    ApiKey: "",
    From: "",
    To: "",
    Cc: "",
    Bcc: "",
    Title: "",
    Body: ""
};

interface ViewItems  {
    ColumnFilterHash: ColumnFilterHashItems,
   // ColumnSorterHash: {}
};

interface ViewUsers  {
    ColumnFilterHash: ColumnFilterHashUsers,
    ColumnSorterHash: {}
};

// let SiteId;
// let IssueId;
// let ResultId;
// let Body;
// let StartTime;
// let CompletionTime;
// let WorkValue;
// let ProgressRate;
// let RemainingWorkValue;
// let UpdateTime;
// let Ver;
// let Title;
// let Status;
// let Manager;
// let Owner;
// let Comments;
// let Creator;
// let Updator;
// let CreatedTime;
// let ItemTitle;
// let ClassA;
// let ClassB;
// let ClassC;
// let ClassD;
// let ClassE;
// let ClassF;
// let ClassG;
// let ClassH;
// let ClassI;
// let ClassJ;
// let ClassK;
// let ClassL;
// let ClassM;
// let ClassN;
// let ClassO;
// let ClassP;
// let ClassQ;
// let ClassR;
// let ClassS;
// let ClassT;
// let ClassU;
// let ClassV;
// let ClassW;
// let ClassX;
// let ClassY;
// let ClassZ;
// let NumA;
// let NumB;
// let NumC;
// let NumD;
// let NumE;
// let NumF;
// let NumG;
// let NumH;
// let NumI;
// let NumJ;
// let NumK;
// let NumL;
// let NumM;
// let NumN;
// let NumO;
// let NumP;
// let NumQ;
// let NumR;
// let NumS;
// let NumT;
// let NumU;
// let NumV;
// let NumW;
// let NumX;
// let NumY;
// let NumZ;
// let DateA;
// let DateB;
// let DateC;
// let DateD;
// let DateE;
// let DateF;
// let DateG;
// let DateH;
// let DateI;
// let DateJ;
// let DateK;
// let DateL;
// let DateM;
// let DateN;
// let DateO;
// let DateP;
// let DateQ;
// let DateR;
// let DateS;
// let DateT;
// let DateU;
// let DateV;
// let DateW;
// let DateX;
// let DateY;
// let DateZ;
// let DescriptionA;
// let DescriptionB;
// let DescriptionC;
// let DescriptionD;
// let DescriptionE;
// let DescriptionF;
// let DescriptionG;
// let DescriptionH;
// let DescriptionI;
// let DescriptionJ;
// let DescriptionK;
// let DescriptionL;
// let DescriptionM;
// let DescriptionN;
// let DescriptionO;
// let DescriptionP;
// let DescriptionQ;
// let DescriptionR;
// let DescriptionS;
// let DescriptionT;
// let DescriptionU;
// let DescriptionV;
// let DescriptionW;
// let DescriptionX;
// let DescriptionY;
// let DescriptionZ;
// let CheckA;
// let CheckB;
// let CheckC;
// let CheckD;
// let CheckE;
// let CheckF;
// let CheckG;
// let CheckH;
// let CheckI;
// let CheckJ;
// let CheckK;
// let CheckL;
// let CheckM;
// let CheckN;
// let CheckO;
// let CheckP;
// let CheckQ;
// let CheckR;
// let CheckS;
// let CheckT;
// let CheckU;
// let CheckV;
// let CheckW;
// let CheckX;
// let CheckY;
// let CheckZ;
// let UserId;
// let Ver;
// let LoginId;
// let Name;
// let UserCode;
// let Birthday;
// let Gender;
// let Language;
// let TimeZone;
// let DeptCode;
// let Body;
// let LastLoginTime;
// let PasswordExpirationTime;
// let PasswordChangeTime;
// let NumberOfLogins;
// let NumberOfDenial;
// let TenantManager;
// let Disabled;
// let Lockout;
// let LockoutCounter;
// let Comments;
// let Creator;
// let Updator;
// let CreatedTime;
// let UpdatedTime;
// let StatusCode;
// let Offset;
// let PageSize;
// let TotalCount;
// let ColumnSorterHash = {};

interface ColumnFilterHashItems  {
    SiteId?:number | null ,
    IssueId?:number| null,
    ResultId?:number| null,
    Body?: string| null,
    StartTime?:string | null,
    CompletionTime?:string | null,
    WorkValue?:number,
    ProgressRate?:number,
    RemainingWorkValue?:number,
    UpdateTime?:string | null,
    Ver?:number,
    Title?: string | null,
    Status?: string| null,
    Manager?:number| null,
    Owner?:number| null,
    Comments?: string| null,
    Creator?:number| null,
    Updator?:number| null,
    CreatedTime?: string| null,
    ItemTitle?: string| null,
    ClassA?: string| null,
    ClassB?: string| null,
    ClassC?: string| null,
    ClassD?: string| null,
    ClassE?: string| null,
    ClassF?: string| null,
    ClassG?: string| null,
    ClassH?: string| null,
    ClassI?: string| null,
    ClassJ?: string| null,
    ClassK?: string| null,
    ClassL?: string| null,
    ClassM?: string| null,
    ClassN?: string| null,
    ClassO?: string| null,
    ClassP?: string| null,
    ClassQ?: string| null,
    ClassR?: string| null,
    ClassS?: string| null,
    ClassT?: string| null,
    ClassU?: string| null,
    ClassV?: string| null,
    ClassW?: string| null,
    ClassX?: string| null,
    ClassY?: string| null,
    ClassZ?: string| null,
    NumA?: number| null,
    NumB?:number| null,
    NumC?:number| null,
    NumD?:number| null,
    NumE?:number| null,
    NumF?:number| null,
    NumG?:number| null,
    NumH?:number| null,
    NumI?:number| null,
    NumJ?:number| null,
    NumK?:number| null,
    NumL?:number| null,
    NumM?:number| null,
    NumN?:number| null,
    NumO?:number| null,
    NumP?:number| null,
    NumQ?:number| null,
    NumR?:number| null,
    NumS?:number| null,
    NumT?:number| null,
    NumU?:number| null,
    NumV?:number| null,
    NumW?:number| null,
    NumX?:number| null,
    NumY?:number| null,
    NumZ?:number| null,
    DateA?: string| null,
    DateB?: string| null,
    DateC?: string| null,
    DateD?: string| null,
    DateE?: string| null,
    DateF?: string| null,
    DateG?: string| null,
    DateH?: string| null,
    DateI?: string| null,
    DateJ?: string| null,
    DateK?: string| null,
    DateL?: string| null,
    DateM?: string| null,
    DateN?: string| null,
    DateO?: string| null,
    DateP?: string| null,
    DateQ?: string| null,
    DateR?: string| null,
    DateS?: string| null,
    DateT?: string| null,
    DateU?: string| null,
    DateV?: string| null,
    DateW?: string| null,
    DateX?: string| null,
    DateY?: string| null,
    DateZ?: string| null,
    DescriptionA?: string| null,
    DescriptionB?: string| null,
    DescriptionC?: string| null,
    DescriptionD?: string| null,
    DescriptionE?: string| null,
    DescriptionF?: string| null,
    DescriptionG?: string| null,
    DescriptionH?: string| null,
    DescriptionI?: string| null,
    DescriptionJ?: string| null,
    DescriptionK?: string| null,
    DescriptionL?: string| null,
    DescriptionM?: string| null,
    DescriptionN?: string| null,
    DescriptionO?: string| null,
    DescriptionP?: string| null,
    DescriptionQ?: string| null,
    DescriptionR?: string| null,
    DescriptionS?: string| null,
    DescriptionT?: string| null,
    DescriptionU?: string| null,
    DescriptionV?: string| null,
    DescriptionW?: string| null,
    DescriptionX?: string| null,
    DescriptionY?: string| null,
    DescriptionZ?: string| null,
    CheckA?: boolean | null,
    CheckB?: boolean | null,
    CheckC?: boolean | null,
    CheckD?: boolean | null,
    CheckE?: boolean | null,
    CheckF?: boolean | null,
    CheckG?: boolean | null,
    CheckH?: boolean | null,
    CheckI?: boolean | null,
    CheckJ?: boolean | null,
    CheckK?: boolean | null,
    CheckL?: boolean | null,
    CheckM?: boolean | null,
    CheckN?: boolean | null,
    CheckO?: boolean | null,
    CheckP?: boolean | null,
    CheckQ?: boolean | null,
    CheckR?: boolean | null,
    CheckS?: boolean | null,
    CheckT?: boolean | null,
    CheckU?: boolean | null,
    CheckV?: boolean | null,
    CheckW?: boolean | null,
    CheckX?: boolean | null,
    CheckY?: boolean | null,
    CheckZ?: boolean | null
};

interface ColumnFilterHashUsers {
    UserId: 0,
    Ver,
    LoginId: "",
    Name: "",
    UserCode: "",
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode: "",
    Body: "",
    LastLoginTime,
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins: 0,
    NumberOfDenial: 0,
    TenantManager,
    Disabled,
    Lockout: true,
    LockoutCounter: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    UpdatedTime
};

interface ResponseDataItems  {
    SiteId?:number,
    IssueId?:number,
    ResultId?:number,
    Body?: string,
    StartTime?: string,
    CompletionTime?: string,
    WorkValue?:number,
    ProgressRate?:number,
    RemainingWorkValue?:number,
    UpdateTime?: string,
    Ver?:number,
    Title?: string,
    Status?: string,
    Manager?:number,
    Owner?:number,
    Comments?: string,
    Creator?:number,
    Updator?:number,
    CreatedTime?: string,
    ItemTitle?: string,
    ClassA?: string | null,
    ClassB?: string | null,
    ClassC?: string | null,
    ClassD?: string | null,
    ClassE?: string | null,
    ClassF?: string | null,
    ClassG?: string | null,
    ClassH?: string | null,
    ClassI?: string | null,
    ClassJ?: string | null,
    ClassK?: string | null,
    ClassL?: string | null,
    ClassM?: string | null,
    ClassN?: string | null,
    ClassO?: string | null,
    ClassP?: string | null,
    ClassQ?: string | null,
    ClassR?: string | null,
    ClassS?: string | null,
    ClassT?: string | null,
    ClassU?: string | null,
    ClassV?: string | null,
    ClassW?: string | null,
    ClassX?: string | null,
    ClassY?: string | null,
    ClassZ?: string | null,
    NumA?:number | null,
    NumB?:number | null,
    NumC?:number | null,
    NumD?:number | null,
    NumE?:number | null,
    NumF?:number | null,
    NumG?:number | null,
    NumH?:number | null,
    NumI?:number | null,
    NumJ?:number | null,
    NumK?:number | null,
    NumL?:number | null,
    NumM?:number | null,
    NumN?:number | null,
    NumO?:number | null,
    NumP?:number | null,
    NumQ?:number | null,
    NumR?:number | null,
    NumS?:number | null,
    NumT?:number | null,
    NumU?:number | null,
    NumV?:number | null,
    NumW?:number | null,
    NumX?:number | null,
    NumY?:number | null,
    NumZ?:number | null,
    DateA?: string | null,
    DateB?: string | null,
    DateC?: string | null,
    DateD?: string | null,
    DateE?: string | null,
    DateF?: string | null,
    DateG?: string | null,
    DateH?: string | null,
    DateI?: string | null,
    DateJ?: string | null,
    DateK?: string | null,
    DateL?: string | null,
    DateM?: string | null,
    DateN?: string | null,
    DateO?: string | null,
    DateP?: string | null,
    DateQ?: string | null,
    DateR?: string | null,
    DateS?: string | null,
    DateT?: string | null,
    DateU?: string | null,
    DateV?: string | null,
    DateW?: string | null,
    DateX?: string | null,
    DateY?: string | null,
    DateZ?: string | null,
    DescriptionA?: string | null,
    DescriptionB?: string | null,
    DescriptionC?: string | null,
    DescriptionD?: string | null,
    DescriptionE?: string | null,
    DescriptionF?: string | null,
    DescriptionG?: string | null,
    DescriptionH?: string | null,
    DescriptionI?: string | null,
    DescriptionJ?: string | null,
    DescriptionK?: string | null,
    DescriptionL?: string | null,
    DescriptionM?: string | null,
    DescriptionN?: string | null,
    DescriptionO?: string | null,
    DescriptionP?: string | null,
    DescriptionQ?: string | null,
    DescriptionR?: string | null,
    DescriptionS?: string | null,
    DescriptionT?: string | null,
    DescriptionU?: string | null,
    DescriptionV?: string | null,
    DescriptionW?: string | null,
    DescriptionX?: string | null,
    DescriptionY?: string | null,
    DescriptionZ?: string | null,
    CheckA?: boolean | null,
    CheckB?: boolean | null,
    CheckC?: boolean | null,
    CheckD?: boolean | null,
    CheckE?: boolean | null,
    CheckF?: boolean | null,
    CheckG?: boolean | null,
    CheckH?: boolean | null,
    CheckI?: boolean | null,
    CheckJ?: boolean | null,
    CheckK?: boolean | null,
    CheckL?: boolean | null,
    CheckM?: boolean | null,
    CheckN?: boolean | null,
    CheckO?: boolean | null,
    CheckP?: boolean | null,
    CheckQ?: boolean | null,
    CheckR?: boolean | null,
    CheckS?: boolean | null,
    CheckT?: boolean | null,
    CheckU?: boolean | null,
    CheckV?: boolean | null,
    CheckW?: boolean | null,
    CheckX?: boolean | null,
    CheckY?: boolean | null,
    CheckZ?: boolean | null
};


interface getResponseData  {
    StatusCode:number,
    Response: {
        Offset,
        PageSize,
        TotalCount,
        Data : Array<ResponseDataItems>
    }
};




// lib.d.ts
declare var $p: PleasanterApiInterface;