import MapNode from "./MapNode";
import Path from "./Path";

// import { Doggo } from "../doggo/lib/Doggo";

const API_TYPES = {
    Rest: "rest",
    Graph: "graph"
};

export class Cartographer {
    constructor ({ hostUrl, authHeaders = {}, atlas = null, nodeTypes, paths, linkers }) {
        this._cache = new Map();

        this._hostUrl = hostUrl;
        this._authHeaders = authHeaders;

        // this._request = new Doggo({
        //     host: hostUrl,
        //     headers: authHeaders
        // });

        if (atlas) {
            this._atlas = atlas;
        }
    }

    query ({ searchValue, type }) {
        console.log(`Cartographer query: got searchValue = ${searchValue} and type = ${type}`);
    }

    queryNode ({ id, type, queryParams, force = false, ...others }) {
        const cacheLookupValue = `${type}-${id}`;
        if (!force && this._cache.has(cacheLookupValue)) {
            return this._cache.get(cacheLookupValue);
        }

        if (!this._descriptors.has(type)) {
            throw new Error(`Node type ${type} not found in node descriptor list`);
        }

        const descriptor = this._descriptors.get(type);
        
        const apiPath = descriptor.getPath({ id, ...others });

        return this._request.get({ apiPath, queryParams });
    }
}

export default Cartographer;
