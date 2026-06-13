import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureNetworkAzurefirewall implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Network Azurefirewall',
                name: 'N8nDevAzureNetworkAzurefirewall',
                icon: { light: 'file:./azure-network-azurefirewall.png', dark: 'file:./azure-network-azurefirewall.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Network Management API manages network resources via RESTful web services.',
                defaults: { name: 'Azure Network Azurefirewall' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureNetworkAzurefirewallApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
