import Wallpaper from '../../component/Wallpaper'
import HouseImg from '../../assets/Planet/Terra/House/House.gif'
import HouseImgGif from '../../assets/Planet/Terra/House/HouseFlora.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'

const House = () => {



    return (
        <Wallpaper
            image={HouseImg}
            imageGif={HouseImgGif}
            nubebot={NubeBot}
            nubetop={NubesTop}
            nube_bg={'nube_terra_bg'}
        >

        </Wallpaper>
    )
}

export default House