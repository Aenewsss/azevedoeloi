import { NextResponse } from "next/server";
import bannerService from "./banner.service";
import fs from "fs"
import { PathPublicImagesEnum } from "@/enums/path.enum";

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

        const [large_image, small_image, link] = [banner.get('large_image') as File, banner.get('small_image') as File, banner.get('link') as string]

        if (!large_image || !small_image ) return NextResponse.json({ error: 'Insira todos os dados do formulário: Imagem grande e Imagem Pequena ' });

        const [bufferLarge, bufferSmall] = [
            Buffer.from(await large_image.arrayBuffer()),
            Buffer.from(await small_image.arrayBuffer())
        ]

        const { id: lastBannerId } = await bannerService.getLastBannerAdded()

        const largeImagePath = PathPublicImagesEnum.BANNERS_DESKTOP + (Number(lastBannerId) + 1) + large_image.name
        const smallImagePath = PathPublicImagesEnum.BANNERS_MOBILE + (Number(lastBannerId) + 1) + small_image.name

        fs.writeFile(largeImagePath, bufferLarge, (err) => { if (err) console.error(err) })
        fs.writeFile(smallImagePath, bufferSmall, (err) => { if (err) console.error(err) })

        const newBanner = await bannerService.createBanner({
            large_image: largeImagePath.replace("public", ""),
            small_image: smallImagePath.replace("public", ""),
            link
        })

        return NextResponse.json({ newBanner });
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}