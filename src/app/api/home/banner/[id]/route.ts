import { NextResponse } from "next/server"
import bannerService from "../banner.service"
import { PathPublicImagesEnum } from "@/enums/path.enum"
import fs from "fs"
import { IBanner } from "@/interfaces/banner.interface"
import { promisify } from "util"

export async function GET(req: Request, context: any) {
    try {
        const { params } = context

        const banner = await bannerService.getBannerById(params.id)

        return NextResponse.json({ banner })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function PUT(req: Request, context: any) {
    try {
        const { params } = context
        const form = await req.formData()

        const [large_image, small_image, link] = [form.get('large_image') as File, form.get('small_image') as File, form.get('link') as string]

        const [bufferLarge, bufferSmall] = [
            Buffer.from(await large_image.arrayBuffer()),
            Buffer.from(await small_image.arrayBuffer())
        ]

        // Remove os arquivos que já existem, para não poluir a memória
        const oldBanner = await bannerService.getBannerById(params.id)

        const isTheSameLargeImage = large_image.name == 'undefined' ? true : false
        const isTheSameSmallImage = small_image.name == 'undefined' ? true : false

        if (!isTheSameLargeImage) fs.rmSync("public" + oldBanner.large_image)
        if (!isTheSameSmallImage) fs.rmSync("public" + oldBanner.small_image)

        const { id: lastBannerId } = await bannerService.getLastBannerAdded()

        // Adiciona os novos arquivos em suas devidas pastas
        const largeImagePath = PathPublicImagesEnum.BANNERS_DESKTOP + (Number(lastBannerId) + 1) + (isTheSameLargeImage ? oldBanner.large_image : large_image.name)
        const smallImagePath = PathPublicImagesEnum.BANNERS_MOBILE + (Number(lastBannerId) + 1) + (isTheSameSmallImage ? oldBanner.small_image : small_image.name)

        if (!isTheSameLargeImage) fs.writeFileSync(largeImagePath, bufferLarge)
        if (!isTheSameSmallImage) fs.writeFileSync(smallImagePath, bufferSmall)
        
        const bannerToUpdate: IBanner = {
            large_image: isTheSameLargeImage ? oldBanner.large_image : largeImagePath.replace("public", ""),
            small_image: isTheSameSmallImage ? oldBanner.small_image : smallImagePath.replace("public", ""),
            link
        }

        const bannerUpdated = await bannerService.updateBanner(params.id, bannerToUpdate)

        return NextResponse.json({ bannerUpdated })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function DELETE(req: Request, context: any) {
    try {
        const { params } = context

        // Remove os arquivos que já existem, para não poluir a memória
        const oldBanner = await bannerService.getBannerById(params.id)

        fs.rmSync("public" + oldBanner.large_image)
        fs.rmSync("public" + oldBanner.small_image)

        const banner = await bannerService.deleteBanner(params.id)

        return NextResponse.json({ banner })
    } catch (error) {
        return NextResponse.json({ error })
    }
}