import { NextResponse } from "next/server";
import zlib from "zlib"
import { promisify } from "util";
import bannerService from "./banner.service";

export async function GET() {
    try {
        const banners = await bannerService.getAllBanners()
        
        return NextResponse.json({ banners })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function POST(req: Request) {
    try {
        const banner = await req.formData()
        const image = banner.get('image') as File
        const buffer = await image.arrayBuffer()

        // Comprimindo buffer para salvar na base
        const compressedBuffer = await promisify(zlib.gzip)(Buffer.from(buffer));

        console.log(buffer.byteLength - compressedBuffer.byteLength + " foi a quantidade de bytes que vc economizou após comprimir o arquivo")

        // Descomprimindo buffer para resgatar sua url
        const descompressedBuffer = await promisify(zlib.gunzip)(compressedBuffer )
        const descompressedBase64 = Buffer.from(descompressedBuffer).toString('base64')
        const imageSrc = `data:image/png;base64,${descompressedBase64}`

        return NextResponse.json({ imageSrc });

    } catch (error) {
        return NextResponse.json({ error })
    }
}