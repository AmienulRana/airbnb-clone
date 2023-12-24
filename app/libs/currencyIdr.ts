export default function currencyIdr(value: string){
    if(value?.length === 3){
        return Number(`${value}000`).toLocaleString('id-ID');
    }
    return Number(value).toLocaleString('id-ID');
}