import { IUser } from "../Models/User";


export function PricePerGallon(user: IUser, previousQuotes: number, gallonsRequested: number)
{
    const locationFactor = user.state == "TX" ? 0.02 : 0.04
    const rateHistoryFactor = previousQuotes > 0 ? 0.01 : 0
    const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03
    const companyProfitFactor = 0.1
    
    const currentPricePerGallon = 1.50
    const margin = currentPricePerGallon * 
        (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor)

    console.log(locationFactor, rateHistoryFactor, gallonsRequestedFactor)

    return currentPricePerGallon + margin
}

export function TotalPrice(user: IUser, previousQuotes: number, gallonsRequested: number)
{
    const pricePerGallon = PricePerGallon(user, previousQuotes, gallonsRequested)

    return gallonsRequested * pricePerGallon
}
