import MapNode from "./MapNode";
import Path from "./Paths";

import Doggo from "doggo";

const API_TYPES = {
    Rest: "rest",
    Graph: "graph"
};

export class Cartographer {
    constructor ({ descriptors, hostUrl, authHeaders = {}, atlas = null }) {
        this._cache = new Map();

        this._descriptors = this.processDescriptors(descriptors);
        
        this._request = new Doggo({
            host: hostUrl,
            headers: authHeaders
        });

        if (atlas) {
            this._atlas = atlas;
        }
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
