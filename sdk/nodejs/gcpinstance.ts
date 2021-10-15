// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GCPInstance extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'run-my-darn-container:index:GCPInstance';

    /**
     * Returns true if the given object is an instance of GCPInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GCPInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GCPInstance.__pulumiType;
    }

    /**
     * url of your running container
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a GCPInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GCPInstanceArgs, opts?: pulumi.ComponentResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            inputs["image"] = args ? args.image : undefined;
            inputs["location"] = (args ? args.location : undefined) ?? "us-central1";
            inputs["port"] = args ? args.port : undefined;
            inputs["url"] = undefined /*out*/;
        } else {
            inputs["url"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(GCPInstance.__pulumiType, name, inputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a GCPInstance resource.
 */
export interface GCPInstanceArgs {
    /**
     * The image you want to run
     */
    image: pulumi.Input<string>;
    /**
     * The location to run your cloudrun container
     */
    location?: pulumi.Input<string>;
    port: pulumi.Input<number>;
}
