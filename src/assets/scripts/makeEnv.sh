
mkdir ./src/environment
echo "export const environment = {
    production: '$1',
    PUBLIC_STRIPE_KEY: '$2',
    CHARGE_URL: '$3',
    API_URL: '$4'
};" > ./src/environment/environment.prod.ts