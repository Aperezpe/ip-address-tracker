import { ResponseError } from '@/types/ResponseError';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IPData } from '../../../types/ipData';
import {isIPAddress} from 'ip-address-validator';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPData | ResponseError>
) {

  const { ipAddress } = req.query;
  const baseUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_jYSorhvdElfbm0E3FJvgq3ZEN1OTs';
  const url = ipAddress ? `${baseUrl}&ipAddress=${ipAddress}` : baseUrl;
  
  try {
    const ipDataRes = await fetch(url);
    const data = await ipDataRes.json();

    const ipData: IPData = {
      address: data.ip,
      location: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
      lat: data.location.lat,
      lng: data.location.lng
    };

    res.status(200).json(ipData)
  } catch {
    res.status(400).json({ message: "Failed to fetch data" })
  }


}
