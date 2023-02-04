// @ts-nocheck
import { neu } from "./neu"


export async function getHome() {
    const ENV = await neu.os.getEnvs();
    console.log("ENV",neu, ENV)
    // @ts-ignore
    if (window.NL_OS === "Windows")
        return ENV["HOMEDRIVE"] + ENV["HOMEPATH"];
    else // 	Operating system name: Linux, Windows, or Darwin
        return ENV["HOME"]
}