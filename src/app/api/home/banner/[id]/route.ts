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

        await promisify(fs.rm)("public" + oldBanner.large_image)
        await promisify(fs.rm)("public" + oldBanner.small_image)

        // Adiciona os novos arquivos em suas devidas pastas
        const largeImagePath = PathPublicImagesEnum.BANNERS_DESKTOP + large_image.name
        const smallImagePath = PathPublicImagesEnum.BANNERS_MOBILE + small_image.name

        fs.writeFile(largeImagePath, bufferLarge, (err) => { if (err) console.error(err) })
        fs.writeFile(smallImagePath, bufferSmall, (err) => { if (err) console.error(err) })

        const bannerToUpdate: IBanner = {
            large_image: largeImagePath.replace("public", ""),
            small_image: smallImagePath.replace("public", ""),
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

        await promisify(fs.rm)("public" + oldBanner.large_image)
        await promisify(fs.rm)("public" + oldBanner.small_image)

        const banner = await bannerService.deleteBanner(params.id)

        return NextResponse.json({ banner })
    } catch (error) {
        return NextResponse.json({ error })
    }
}