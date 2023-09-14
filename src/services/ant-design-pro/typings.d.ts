// @ts-ignore
/* eslint-disable */

declare namespace API {
    type CurrentUser = {
        id: number;
        username: string;
        userAccount: string;
        avatarUrl?: string;
        gender: number;
        phone: string;
        email: string;
        userStatus: number;
        userRole: number;
        planetCode: string;
        createTime: Date;
    };

    type LoginResult = {
        status?: string;
        type?: string;
        currentAuthority?: string;
    };

    type RegisterResult = number;

    type PageParams = {
        current?: number;
        pageSize?: number;
    };

    type RuleListItem = {
        key?: number;
        disabled?: boolean;
        href?: string;
        avatar?: string;
        name?: string;
        owner?: string;
        desc?: string;
        callNo?: number;
        status?: number;
        updatedAt?: string;
        createdAt?: string;
        progress?: number;
    };

    type RuleList = {
        data?: RuleListItem[];
        /** 列表的内容总数 */
        total?: number;
        success?: boolean;
    };

    // 通用返回对象
    type BaseResponse<T> = {
        code:number;
        data:T;
        message:string;
        description:string;
    }

    type FakeCaptcha = {
        code?: number;
        status?: string;
    };
    //登录参数
    type LoginParams = {
        userAccount?: string;
        userPassword?: string;
        autoLogin?: boolean;
        type?: string;
    };
    //注册参数
    type RegisterParams = {
        userAccount?: string;
        userPassword?: string;
        checkPassword?: string;
        planetCode?: string;
        type?: string;
    };

    type ErrorResponse = {
        /** 业务约定的错误码 */
        errorCode: string;
        /** 业务上的错误信息 */
        errorMessage?: string;
        /** 业务上的请求是否成功 */
        success?: boolean;
    };

    type NoticeIconList = {
        data?: NoticeIconItem[];
        /** 列表的内容总数 */
        total?: number;
        success?: boolean;
    };

    type NoticeIconItemType = 'notification' | 'message' | 'event';

    type NoticeIconItem = {
        id?: string;
        extra?: string;
        key?: string;
        read?: boolean;
        avatar?: string;
        title?: string;
        status?: string;
        datetime?: string;
        description?: string;
        type?: NoticeIconItemType;
    };
}
