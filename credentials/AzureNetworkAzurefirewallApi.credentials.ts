import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureNetworkAzurefirewallApi implements ICredentialType {
        name = 'N8nDevAzureNetworkAzurefirewallApi';

        displayName = 'Azure Network Azurefirewall API';

        icon: Icon = { light: 'file:../nodes/AzureNetworkAzurefirewall/azure-network-azurefirewall.png', dark: 'file:../nodes/AzureNetworkAzurefirewall/azure-network-azurefirewall.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Network Azurefirewall API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
