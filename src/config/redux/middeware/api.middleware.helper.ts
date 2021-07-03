import axios from "axios";
import { HEADER } from "constant/api.request";
import { BASE_URL } from "constant/api.url";

const networkHandler = async ({
    requestUrl,
    apiOptions,
}: {
    requestUrl: string;
    isAbsUrl?: boolean;
    apiOptions: any;
    apiVersion?: number;
}) => {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.common = HEADER;

    try {
        const { data } = await axios.request({
            url: requestUrl,
            ...apiOptions,
        });
        return Promise.resolve({ data });
    } catch (exception) {
        return Promise.reject(exception);
    }
};

export default networkHandler;