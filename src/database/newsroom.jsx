import content from "../pageBuilder/pages/newsroom/index"
import CarSideVideo from '../components/cards/CardSideVideo'

const blogs = [

    {
        title: "BG Unified Solutions and Forcepoint working collaboratively!",
        headertitle: " BG Unified Solutions and Forcepoint working collaboratively",
        headerIcon: "/assets/images/newsroom/forcepoint.jpg",
        description: "A start of a new journey where BG Unified Solutions and Forcepoint collaboratively offer...",
        date: "February 2022",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/forcepoint.jpg",
        imgalt: " BG Unified Solutions and Forcepoint working collaboratively",
        category: "Updates",
        tags: ["Forcepoint", "SD-WAN", "BOTaaS", "DDOS", "BGUS", "WAFaaS", "VDOM", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
        link: "BG-Unified-Solutions-and-Forcepoint-working-collaboratively",
        content: content.forcepoint,
        logo: "/assets/images/brands/forcepoint.png",
    },
    {
        title: "BG Unified Solutions and Forcepoint in AI Space",
        headertitle: "BG Unified Solutions and Forcepoint in AI Space",
        headerIcon: "/assets/images/newsroom/ai.jpg",
        description: "Something coming in the next few months which will be one of the best as a service...",
        date: "February 2022",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/ai.jpg",
        imgalt: "BG Unified Solutions and Forcepoint in AI Space",
        category: "Updates",
        tags: ["India", "POPs", "Singapore", "Indians", "BGUS", "Expansion", "Offices", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
        link: "BG-Unified-Solutions-and-Forcepoint-in-AI-Space",
        content: content.ai,
    },
    {
        title: "4 new POPs to be installed in India",
        headertitle: "4 new POPs to be installed in India",
        headerIcon: "/assets/images/newsroom/data_centers.jpg",
        description: "Things are moving very fast in India and Singapore. Last week in the company meeting...",
        date: "February 2022",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/data_centers.jpg",
        imgalt: "4 new POPs to be installed in India",
        category: "Updates",
        tags: ["India", "POPs", "Singapore", "Indians", "BGUS", "Expansion", "Offices", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
        link: "4-new-pops-to-be-installed-in-India",
        content: content.pops,
    },
    {
        title: "BG Unified Solutions Services are now in India",
        headertitle: "BG Unified Solutions Services are now in India",
        headerIcon: "/assets/images/newsroom/india.jpg",
        description: "We are very proud to announce that a brand new office in the Delhi NCR...",
        date: "February 2022",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/india.jpg",
        imgalt: "BG Unified Solutions Services are now in India.",
        category: "Updates",
        tags: ["India", "SO-CAAS", "VDIs", "Indians", "BGUS", "Expansion", "Offices", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
        link: "BG-Unified-Solutions-services-are-now-in-India",
        content: content.india,
    },
    {
        title: "BG Unified Solutions and Fortinet working collaboratively!",
        headertitle: " BG Unified Solutions and Fortinet working collaboratively",
        headerIcon: "/assets/images/newsroom/fortinet.jpg",
        description: "BG Unified Solutions and Fortinet working collaboratively on offering highly secured...",
        date: "October 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/fortinet.jpg",
        imgalt: " BG Unified Solutions and Fortinet working collaboratively",
        category: "Updates",
        tags: ["Fortinet", "SD-WAN", "BOTaaS", "DDOS", "BGUS", "WAFaaS", "VDOM", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
        link: "BG-Unified-Solutions-and-Fortinet-working-collaboratively",
        content: content.sdwan,
        logo: "/assets/images/brands/fortinet.png",
    },
    {
        title: "Consultel Group with BG Unified Solutions - Enhancing Excellence, Reaching Perfection!",
        headertitle: "Consultel Group with BG Unified Solutions",
        headerIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlYAAAFCCAMAAAAE1GM9AAAAPFBMVEX+/v7v8fMpU4JAQj8TQnQIOG0kJiMxMzEyNDH////L0dhvjKxbXFqxwNDe4eVGa5OdnZyVqsK1tbR5eXfkFQiMAAAACHRSTlPu////////7ikgQ5MAABFLSURBVHja7J2LuqOoEoUbBSdBwdv7v+t4i6GKi2xjpu3pVd3zndNugon8WVUUBfvXL9jXbPznb7Vfv56wL5l4/K0GrL6JVQmsYMAKWAErYAWsgBUMWAErYAWsgBWwggErYAWsgBWwAlYwYAWsgBWwAlbACgasgBWwAlbACljBgBWwAlbAClgBKxiwAlbAClgBK2AFA1bAClgBK2AFrGDAClh90+wDWMGgVsAKWAErYAWsYMAKWAErYAWsgBUMWAErYAWsgBWwggErYAWsgBWwAlYwYAWsgBWwAlbACgasgBWwAlbACljBUlg1FbCCXW7ACga1AlZQK2AFtQJWMKgVsIJaASuoFbCCQa2AFdQKWEGtgBUMagWsoFbA6v+NFSoYYMAKWAErYAWsgBUMWAErYAWsgBWwggErYAWsgBWwAlYwYAWsgBWwAlbACgasgBWwAlbACljBgBWwAlbAClgBKxiwAlbAClgBK2AFA1bAClgBK2AFrGDAClgBK2AFrIAVDFjBgBWwAlbAClgBKxiwAlbAClgBK2AFA1bAClgBK2AFrGDnDQdow76gVsAKBrUCVlArYAW1AlYwqBWwgloBK6gVsIJBrYAV1ApYQa2AFQxqBaygVsAKagWsYFArYAW1AlZQK2AFg1oBK6gVsIJaASsY1ApYQa2AFdQKWMGgVsAKagWsoFbACga1AlZQK2AFtQJWMKgVDGoFrKBWwApqBaxgUCtgBbUCVlArYAWDWgErqBWwgloBKxjUClhBrYAV1ApYwaBWwApqBax+38gbx3rt/dz+qDfdO50ZqNXfi1WhHKs5VG39o95qtzMpgNVfjJXcjWPVe1cOsXI6K4AVsPKx0m1Av4AVsPoEK1FLJT9RKwknCKw4Vv16HWoFrK7DavZ/ElgBqyuxWv0fsAJWV2JlnEufxFbACli9IUqmHBCyA6vfixWcILACVsDqD3GCwApYIbYCVn+iE6w2yx4Zv3n1tgsJ+EKX38BKWKtnsyLZbG110MjpdG6c+Nn849zODhIMGVjZyA1jWFVVOXbdMHRjU24DWBFIqooxUz3Gpf2r+dTi0Sx9DJ3Tiw8cAYRf95tVVbPcqGse1W2xEqZuiz22aGsTJsH2ezPeiNQ/bT+wr9ZtzfvTfevccO5MhDoyOnwDYylW7XytkPzKZIK8+dANE1hVzbC3sl1ZLVccG6vR/ef0qqrRbvNpyJuOPKZhLB0M3FcP3ft6R67zm85QjZq+sRtiZeu5eGl5pOuDVapojddM13IpR1paLf+vfo+69sqf5pz33ljWziiKvt16emXF5zv2awsrw4VU5AbKEG2Sr+7Ylenaa0zNcsvtR+sNHdaDsVX16Oh3bxrQanSvdBVpMVbuj6fm1U6Z+7TfGJRENe17dOn1qnH/OUzvoiSjY8fqhlj1kg/J8thbzdiTgVbta2isZB5Is3HfW74X7nhfesMq6Ms0acyxipqN3tJlPaRWVekh0VUHWDX0n+UQ/hpvGFQlEXH9Hl16nWNVNdZ7Y3fDSgQHeflOu18JEx5GJXt/1GcYNIdQtWKnWCZuaKW8HKvILSfF0lGs2Ji/hi+NlQui8Ef//cI1IDqJVSkCb+xeWNn48CjVvxVNxZptjZha6YC01Qc9TS/RX8GqTtzRxPJWlQk9rqZJYNVQ5prEYx8Wrk5h1VUhWi9KiVyElU2Ozs5VH2+1xT9ErXoR6FYp/XyGeKNCcT1WdeqOK1e+WlFgHP+VUisiVl1yfjtUp51g8J3Za+L2a7CaPGBqTBb5mD1gulXP1aoPjuTCyMEN6+ux6tN3LGwQqzIChUhgRfRNHGRNZrd1Cisb7+8uWNUHY6NaL4qOwEdGvYi0sxTQbbJGMRDXYiV0zkf0sepyHl+X1yxsk9s6hVXMLpGrS7Ayh0OzKFGbMTJ01KOdtSTb1BvT0xmDqq/FqrDszfskzx+Rx1ZlKb6OlT3pBFPydw+svKHxsz/TM+79Vj4vOmOMJ2ZIpZ0IzDELXVyqVlSPlaz7npM8fUSetyrH59exmhMQV2IlyptgxXlRsmgL6X2X2QBOrbxGBQ2Joqqm6WhumklcYn8tVjKUPDPk/U8fkTvBSMLpPFbCDAMPigTH5zOsnlckRa/AquXfZC2EsD0dsLbnrawQmuVGlbGBmZ8nfW5fa9i2vQ+1LAe1dW+0PpUOjWbZg6kz1lnrx1YcgWFsxiETq4D/HMp5La/zODiNle3GTgcmlzfASkeynyw/XlBd0kRi3jLgxeftvAZHx7WoZQgrPeP0Wv49NRMs6skKya+wazK2WmNZbCVGD4DZGpGBVdeUdBlwzc4vWfWRJ6/OYtUti8/d9V7wAqzYNNAERtAXARP2oIUpZAA/Bp+LlXSSreR7eAKraAVDrLMnnRj09MMI0QXdi8dVAKsVwCEoIxwE0ZzEao3OPa4uSIlegFWrIs98/snqQoq2jraiLpTpwksYGHw184laXIdVqN6K3l5HPryqmRMUwzO4BszH0cdqGXCe9NqHu6K80PxpPlZ2r4WxV88FP8eKZcItTTwUc6AzO6Y6NjI0BdUWwfQ8uwmFT223IXBdihVPHISnK6rlWOnwcHFeOt8PVb6zc2Ie1n44h9Uem8dv9Puw0n7ec386TpkerWuKYynDUQyl0rShwFq65U+XYtXG3jz9UhQtTaEKG3EuzLt5WK0Dy646MzQGiD7lBMWe+OTd3QEro44DnUR0ksqSOiNI3JDSkbT+Uv6kL8fK8mSF2P+QNcyi4AuT4WHkwHhYrQQx+NyQh2aq6AJPLlZOXVY05v99WNEBNzFNi8OXKAyoY1jpRL3EmlW6Eis61y3a95+2SK53x8rrmNfxsFoBJPUxbIKmP8fKdar63lhJm6VpJpVNPcZqmke2R+UE38Nq8bfbf0olF5+jWDVJrGyICkuK1xN51jNYDbfDiqcAc+DTmVj1UU1MVuLMFV5XYmVOZOLndcRnTEUOsHoNeNw1XYFVd2us+v8eq1mNTLLgSmrx27GS4jOs4kt9fwNW8cn3N9XqiKv2zFLzpVh5IXs+Vh3UKlOtzNVqNR9DLBOFx3UEKx7kfRMrEYu5D0L2sboktmLpsT8XK1lcG7L36fmmntiJRc2FvA4r7RX0OH/Jmdksb2VieasuCytNy4FdrHJmglX5/L/MBHVW0jQ3wZBUqzXh2rdxtEJY1R9jNacVSI7h/ZflrdjizTufWekcrKiGCFK2mZW3apJY6VvnrRI69DR7SUHiZIP2tFrtaNVtGi0nr3oGK35JuH+cv3xWzJaaTSSrHcUqnmUvE1n23dmy1yey7KW4HVY6nj+fxkwtO8prYzIXb4qfqdXbRZi6TYC1x3z0bp8v3iSTLWIUQTD4Ji+O1WuP/RiNhdgiXniRiGli9prgLRZvSAaJxuxGRTYwqNhSs6R+JEut3j0l9irqIJ6fLzWnZ8Vsj7tt1vM1umceVtHFFhaxj8ElbU6Rh5V+hDEfblgY0+e4t3hhTJ+F1f4YhXUdgD70glqewiovfvTPYCh5ZcJYPspmeOZhxQtW3upCC7ZYvdX2i8G87dSxeiuvLPAWhTEsWnEeemqzabiMj1Spp5yg1aafIqo5XG8zV63tXAnO6+kPsWo31xlz9FP06JxH5NWyB8p8g3vnw1EUX9MpX4cHMe/2YKDbcWo1eqfrBKpDg9Wq4y2wosu+eznxwX7NjaueqZjNCtmLQu5TetehJreMTRB6zjhUHeqrr2D1084BN/IVPfbGaOHvE8z6xXExtfLq7sr1YKqBY+Dppw0cBhaqZdeB2npR3gKr4BYJy0qiVMEAmlpZ6xW42CysSBrUkStRJLMMKiSaB1hJ6VWybzuY33Hli3BaHbqewTB+ghUPup9irnDnMjRhkLXBJ3fnjb7JzpvAhq6CC8M0Yq2/octvlIdVOFAjW/ZpYXLcFx9itSDT0glksVQLCrq5SCkbODHGfoSVT2XolJe8/WB/2oYu3/f4G0v5BvdQq7mR/jlW85F5dt5BRuvKc1ZcglgF0rOKb0dTRV1znzq9OnC0x3gCKydvag5fLMpHniZmbz+9C1b6eLN8/cw4qaF/ZqoV90pTsFVQSpUR0eqGA6xCBBfieLM829X8Ot8q6KB0nlrxg/Yi4lJl7cnPxGq4zWb5jKM9xPOgan0LkvLUqi9Uenf+3Fckfm+PsNLBdKqW6lD5wueyB/IRQ5OL1aEQLRTEgisSuOdhJe5ztMfhuUDyVV+ePJTKrxWOYaXTs8z1hiZ8ipF7OYhVgH51fBDR8l5DZ4cGjuMzVTZWj4O4aU1pRoCxzc+xutNBROkDrpyNznGutsREllopfcRxH2F98kz6CKsgQPpAkv2wbD/pmB38uhyhN2bGVgc1ME/9SmWFz/wjZ9JmYWVudRrf07bqmCpvA70/ac9TK5Pk+HWqpA/xfJdDtQrKlZmPXE7sy6ifUazmo46Fm6usqgOs6LbihF69qPI3Sq90lim1GnSiw9scSVvHjqQtNMUvfDyxSBfQeGuC0SNw5+n//iLlv5VjrKYmKih/0Y/4OlA39jtvqrJb98YKPc5e60dYTa0jEXn3PqI/EION7Dw1r4zPj/quourKA7SX38Tu5xBq9kx6P9et3qe3zwozZxaX/6Fn2W5X5XKc+tZR8Djr97MkhcnbTi+jlHI6Ktx+6wiPL+DCH/Hf9u5FOU0gCgPwEDKUKFCi7/+uZb3ucknIRBiL39+ZdhrNEscvB8Qj536N8H38U8Yzb4ruKa6O1XX6w092gieVYzvCOjkE69vLqv4rxJHu0Hawd37GKRL1/v6myvnv4dyH+1X6r0lGAjRvcT6j7oQ4u+tCb8nmwhsp+7TRMdrUZbVkpfrjb/zfffIrEi/7eX+Ity2+D7a4f49XS0cpxXNDhqyyOINraxRF/+oxzaHqjalJ7GXnWQB5E6060h2ajBHYHYtnvNz/taUuvAPcJVxmauq9/tAddb5TuEJDukKciS9naQvfdXthg4PdxWl8Sfhh7mNLkoUmFv4IC18fRm98yuf9Efa32FusGpuINMYqTzI68Kis2sOuCdkd2v7Qm8sBVns4334blZMsO9LLHlatw/fUjx16s8yErizLZt3rgdvLltjQ9LLZnIeYVXUwcKw6KQmu4SdtZjylpwXy7k85NU8rfD2fur0oR3vZL9/z4BFdrz74bdFk131MdtKVT7bhzX5Ki9/c5YtP3pQPDlZrsBq0BjRfvfJbKtOfvCmx+n9Z3d4X6R1aPeTawnNSLXA+Hav10zsxsCvPvey9c5eHlUbvFlhthFXvxFBz6mVvH9/kayf4SjvB4eX+s2Ev+2r7QNVqK9VqTiNUu9r4edVqG6lmdJlneaFayY9eCc7oRTmuVqyw2ky1+vbTC/Vqqhyyb6dald/sBnfleqyct9pMterU1M+iSrXaTrXq9Yamt7drqnJstaFqde4NHfsQatPma6JSrTZVrc4dAqEVKmoTaw6hv2ldVWWZV3GWPAuL1fLV6tbW1D2Xxy7hGS1WN3XpuQpHe5d/sPrPq1XcdzzWLbq5YLVOtXqxYLVitcJKVCusVCusVCus5BfVKi+xEqywwgorrLASrLDCCiussBKssMIKK6ywEqywwgorrLASrLDCCiussBKssMIKK6ywEqywwgorrLASrLDCCiussBKssMIKK6ywwgorwQorrLDCCivBCiussMIKK8EKK6ywwgorwQorrLDCCivBCiussMIKK8EKK6ywwgorwQorrLDCCivBCiussMIKK8EKK6ywwgorwUqwwgorrLDCSrDCCiussMJKsMIKK6ywwkqwwgorrLDCSrDCCiussMJKsMIKK6ywwkqwwgorrLDCSrDCCiussMJKsMIKK6ywwkqwEqywwgorrLASrLDCCiussBKssMIKK6ywEqywwuppWMli+fOy+Qd+DIVBBndwkAAAAABJRU5ErkJggg==",
        description: "Consultel Group coming together with BGUS, for efficient and intelligent business solutions with authentic integrity...",
        date: "October 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/consultelgroup.png",
        imgalt: "Consultel Group with BG Unified Solutions",
        category: "Updates",
        tags: ["Consultel Group", "Consultel", "Consultel AI", "Consultel Managed Services", "BGUS", "Consultel Networks", "Consultel Cloud", "Saurabh", "Sareen", "infrastructure", "racks", "Network"],
        link: "Consultel-Group-with-BG-Unified-Solutions",
        content: content.consultel,
        logo: "/assets/images/brands/consultelgroup.png",
    },
    {
        title: "Business Operations during COVID-19 Pandemic",
        headerIcon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QEORXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAZKGAAcAAADYAAAALAAAAABVTklDT0RFAABNAGEAcwBzACAASQBtAGEAZwBlACAAQwBvAG0AcAByAGUAcwBzAG8AcgAgAEMAbwBtAHAAcgBlAHMAcwBlAGQAIAB0AGgAaQBzACAAaQBtAGEAZwBlAC4AIABoAHQAdABwAHMAOgAvAC8AcwBvAHUAcgBjAGUAZgBvAHIAZwBlAC4AbgBlAHQALwBwAHIAbwBqAGUAYwB0AHMALwBpAGMAbwBtAHAAcgBlAHMAcwAvACAAdwBpAHQAaAAgAFEAdQBhAGwAaQB0AHkAOgAzADcAAP/bAEMAFg8RExEOFhMSExkXFhohNyQhHh4hRDAzKDdQRlRTT0ZNTFhjf2xYXnhfTE1ulnB4g4eOkI5Wapynm4qmf4uOif/bAEMBFxkZIR0hQSQkQYlbTVuJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJif/CABEIAHEA5QMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB9MVICBhmaPgxX0ubn6JcXupVrAVNzLhh05WY3S1m7ipbz0DNw9ZslxZIvY/MwT1OXHWaye1TSpuUopB1Vma3qznvRp55omcjVTqrlhLSPHabIJNZskOW4edba8zmuqua5dejl3ueli1hk5G5y5nXfD3GGfTysjZnsk1AhDJLDHoizEC552iausWdF8u01ppEp6bT1jz9N5I0xherXh7kOLt5nPKpWfRakgE6mblKUlM7hnxahrVxpLK3gYrPQ05+jWMHrgZbTmu23n96VNBxTnjNdRhUtw0MAjs8/wBO51EWeG5a1UVKwa2SR19vnejrD4+tnLroGOlAee9kyy7eCWopTeS1mxOWi9Hy+iz0yQ8VDUGxWnK3Aa+t4ft3LAAAPPXQh0gp5HseZrGKgx0tQ6dQFZ1R0nEWICWkC0wi4Aj2wubYCkDyvXCwYSrhDWONhjrDCyQLJ0CABf/EACUQAAEEAQMEAwEBAAAAAAAAAAEAAgMREBIgIQQTIjEwMjMjQf/aAAgBAQABBQLF7i5rU7qAu5I9dpCMBUFRXKcnYGBg+9l4pXjlGRjUepRdK9CJBoCq1pXkFwuEUVSoLjFoFHkbeTgzRtR6glEyPQjQAGL3dtace1SpcKgqQCIva7qHleTkGBaaQV7KWlaVWx/DuMUqVLnJ22gc8KgmtCrcHA4l9UqVY4yMEL1t5xatQusYsVqt7HO1R/pF4uThYb8HvB2WtS4VYh4fg+KhCja69AVN1Yd4u1K/mBQKtAgSYeQE5zhGSS135gOE2Jc8q1avFKk23EAAZ4qkMEpp4U356fBrHaQzxc5uSLDvE3kjNolQimZtWuFS9IqL88GQCN7naiXdxmoIesSyBNca1K1exyb9N946f1hrBocxxGnz7YTWhuJpLQhpgAVItzatFRG4/hgPnvllsxRaFL9NhxSKgfR3WrxGf6bpZbUUWjB5C52go4ZMK+D/AEbZZdRii0DMwqSzsvF4recFN+uXfXpv02dR7O8Y/8QAHREAAgIDAQEBAAAAAAAAAAAAAREAIAIhMBADMf/aAAgBAwEBPwGii9MXhqovXHHPmSWDQ2NRrPg4DDXPW+KuDQ8wdrvlrffP8gr/AP/EABwRAAICAgMAAAAAAAAAAAAAAAEwESAAMQIQQP/aAAgBAgEBPwGk0CJyaR0VCp0oeWHl4fx3b//EACoQAAECBAQFBAMAAAAAAAAAAAEAEQIhMDEQEiBBIkBRYXETQoGRMlJy/9oACAEBAAY/Ar0JlcIddFOeMircldXXDCrsp4WUtV9T6rMplX+lwhTOFqU6spKZ5TflpHvSaocX2UjIB1C5/IWX2/dEHcsOZ9I2JkowfCGb2hl8um3M8TyYOIJDzkicrFZT+2V1FCfaUDF/OL0mFIYHtNEOS6b5n1UWb3IbnZqr9auYLh2Dp4ZysoAGeYU74y+8b6ofFIjGMZZzQaRZin7Mp9XUhhkhRzXoik1DJAnN6WU70hryQJzfBqXFXyQLvo88mNB8L40w0v/EACQQAAIBBAICAwEBAQAAAAAAAAABERAhMUFRYXGBIJGhwTDh/9oACAEBAAE/IbiFxNF+iOWYViZx9kPovS17E7MEqJj0XOXfmMla3Ytceho/od09EPAl5LjRZqVwZcxAgsommTJrIg5lTBAgstEt4X2RtDwZ1fR3Xk4A6L03moGuSElsiUXUoTniOqej/S7d/A7uFJaMXTQmQh9MVAx8Z4DsatNv6OYC3R+TIMEbvc/4AlaQhNIpE6/Do4FbdjhMOB2IishiDqMTj6EJwx2fwwFFyy9+WbRxkowmJNyTLJEJnpibcCTkSLXwW77FLRC5PMjzPswoS+R8rYkjsSSJi6UE3yJqRdiRkaW2xIsL5MkpG19KJaxI0rH1JLuqO2PgwEEg1L4JMXYTE4jciw6NwpeEbvCZLPZXc4HHSJz6D43TyPuefg8apIowis6pHo6lEtXSJhJd8izZ5GmiSRBJiBS6EGoGbVOVZC7pjxb1m6Hrhv6QIRoUC+SJy3xl1ngv4BGUj7Ejg7THMUnuCX5GqRSBqhBhndGyUizmiqRaOSyEcuSWF7yWlCy5du+4IJ3o1vuqYEJkRiUfYfJEDAcPRDkcNiTb2RpITMiLoGBKRShmUrkjIyqJeWbHovnVcsgU6Xhshj2WvGhfF5luFi6iioGJY0cIJpJojhsllmZp9oqQoZEnVHDZLyINSO4JOY3R4JwLEpMUuKLNrJPTpFnQDPJKEk9oq84XFghy/gk8HWhJnOC3JkfkUjusEeRSSeUW5gZNd4u6wIlyTAx2WTcCjDjEN83OeiBFESo17r042LYuZfQgrjVkA1BfkToSjkl4tWRQez3RDLzksixb5uyLe0KwG/4LL9Ca7J7TGySHBCHSm8GHkmsEOioSRfsL5PfLNpWxSZHoknIhptPQ2JZLJPQzB4DRbZytrdZJEQm3cjqisrnDGm/xdk5y1sVI7vl/CS6TQh0UkqIRwOjRqiHg08GmYn4Ph+9/lIWzY8VM/9oADAMBAAIAAwAAABBgzAwFoz7AVnQxIK1ABT2ZhrxyhHNwzMRKYQAEgABYrUXNpq4aDGwlfjLR1wEJtOuC0x0DhPcY/wAxrQDxYcs7OD2bZNYxDdp88reEP5ICAcAdc9gihi9+c8j8/8QAHhEAAwADAQEAAwAAAAAAAAAAAAERECAhMVFBgbH/2gAIAQMBAT8Qyk2IwsIS4SHWiVE4lWG0NBmi4OpkINCXKEyj8LiYf9i/mrSIdKKC80ZwS/hidVyxsomIfwNcwsMl4xHiKi6KJ5eqy4NHRlxBFH7r0XyUpT3VjysvjKx//8QAHBEAAwEAAwEBAAAAAAAAAAAAAAERECAhMDFB/9oACAECAQE/ENoxbkOjLcWQmNBtkEsRCztF1OaxognFLianC5ENH1xXfXBZMZRfeVEIQWvwRynYvXumiZD5wfgfuvP/xAAnEAEAAgEEAQUAAgMBAAAAAAABABEhMUFRYXEQgZGhsdHwIMHh8f/aAAgBAQABPxBKYqcARANa8OqQGjl4qGeKDzqS7qvjEovAVrRMYBXpiC4aHAXNPFs2fiWy/lKJjQfhDWU1sxeCj4MQVIVQUbCWTM8oUN5dkSpRspmXczbDlUsUEugaEbL+RoVxbEMygy/QgVAwAzY6wbOUdlalyhVteY5OlvhcsNBwK+4XV42VsJURcupqbXbAlthXNzRxiYJBHMueVIe2dvF5pciULdL8zdnvZi2K+jGRdrVUaLFeljWoMClJrZwzAJRAf00nBxiyNqoMGXLxLJnqWi/iU2PuBDaAzAC/uOUe2bE3xRg+pkDB2AEdB7wDUSAglYuOF0XzKOCXGtOrQWrSONrzUaQVTVkQVa8OYC6QvOJmsuyX0TzUXpXtEtwm1bh0WWxPygamDBg4lqDchb8+kLDVa72/7MV3Dsv8lFgnJBOAe4CwyQDWorFebl1SPiLyBBmV8wbHyz6D6YVo6OYgsqucRdLZ5/7Ljw8fxOT6E4geKZQwX9kbjI7Zg6Fc4vMUZD2llTCDCANUJBuykDCX4lYLVKzqWLkcQxQD1iV7HTLpNDDwf4rQrtrBaUKvt6Xh2afDGrLE31du5yvhT9R01vyXCmuF7qWHY+ZpsjDbW2SONYlOqBjUMvErJiB5IzRgLiH10eoTSIF5IguK79AZKC14Ig669KuZcNFzP6MCyjEjQqqVXswgVDntWiuajDdWWfZ1w2c+nZ5GrtptczQDg2Yu9YiEtZEvWnisTIysOSzJy/zLNHHHEtRurq7gFgXtZNOFO8xSkgoQAawtIPmUhEUs7loLS+YgwlXgzctWi+oglJYwJsNk5f0fyBEyN+RQ+mLApsW1mesBCxtj2KUqpW4F2zZKLOND16oW/ZjrCuaxG1Ng4gLcQ4tVKzbHvMsVh8Sw2p7hqtQbj8mHrVe0axbHgSm8yy2RQtx3KNNHaMbxcMLEr0pQVWl4lBGTrV+jKKwRm35KtqlAYXVtTV/gXkKcNYjsLGvuiN8g/UXdG9g0vhp60p+GJ7avZuZLXTMEyZRTXDkl1V9awLlTKeVEtBnnEp38iXBA67A5laXamWOOsSlwF5I6hcDkbckApddx93NTfLYJMnLK62x6IrVWnCrjkgOXkxXEGShr2bLTeGtW8XgUAD7Ri2hwpdLxjfeJQ2EyXdeiIbIC+YuJrJWvUL1ZnmWpw88weB5GKHIIWai+aiwAHkuE4Mc1COmW3xtDSV0yxozmP2Pc5S0GcbwCu5dZhUBT4gCL7eJUW2ivPpS1llacw6SoTpq848R8WGrGvS9sSwjsrhGyzsafmE81qvWEdoyBAyFF+llW6R+JQ5PkP5lQVpobdIJ0YBrl+IdsncW5Ro7jSEUNwi0Q1SwrzMQNP9ENIbi0L3L8QR3lNUL4SZ5wiOiJ4lQArzFrYlHJ2hO3/wAhph9HpJPRbqmfcj0jR5gv3IRNQGLhsZR2CmlsSkslD11obsxNVo9hwddxkDKu3jAKNTc/3AdcyhjP1FW8EaZTVoozY7zJYjD3QX8kHEtIMitkgl4RcLusob39kSH9ZosWZ2ajTemV6DEH1x6iLGU7nR1ywB3iTToS50ohadorSkauPMibDXmyDukK8S2ykEXNeYtWZgSCorXcf9QFSipX9ZerH4gHcvm5wfxKUpWDFzRj3qNXcLWzEQmk31ldT6n3PaZqJW+gddzTZsvHR6G5oEYt7KpJYpBnRXvORSLprMVThBGVeYs0xVkhOPqLpKKxCzSaM4hhQ7SphMQJGAbxxyszG2a+Y0KlDb0yiAwlkzxPmF8TMzcsr6A67mJYvB0entC46goqeYqg/cX1/Yjco0+43Ul+Jd7YlDTkY3LyHaZMYjo+g1T+ZqZoz8cPsmrPo/ybkI6z+849Iaf4fWf9TSeYax195+U3zWhrNJ5muf/Z",
        headertitle: "Business Operations during COVID-19 Pandemic",
        description: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia...",
        date: "7th September 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/businessop.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Updates",
        tags: ["Huawei", "virtual desktop", "bare metal", "VM", "VCS", "free services", "Remote Phone System", "Contact center", "DC", "RDSaaS", "ConstantEFG", "Uplink", "E-mail Filtering"],
        link: "1-businessop-during-covid",
        content: content.businessop,
    },
    {
        title: "Radware collaborating with BGUS, providing Cybersecurity Solutions",
        headertitle: "Radware collaborating with BGUS",
        headerIcon: "data:image/jpeg;base64,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",
        description: "A very big step from Radware to work closely with BG Unified Solutions to offer a redundant, highly stable...",
        date: "October 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/radware.jpg",
        imgalt: "Radware collaborating with BGUS, providing Cybersecurity Solutions",
        category: "Updates",
        tags: ["Radware", "DDOS", "WAF", "BGUS", "Cybersecurity", "Alteon 6024", "NSW", "VIctoria State Government", "Saurabh", "Sareen"],
        link: "Radware-collaborating-with-BGUS",
        content: content.cybersecurity,
        logo: "/assets/images/brands/radware.png",

    },
    {
        title: "Helping Hands during COVID-19 Pandemic",
        headertitle: "",
        description: "COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just...",
        date: "23rd August 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/coronavirus.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Updates",
        tags: ["B2B", "VPNHEADEND", "Firewall", "covid", "10G", "Paloalto", "Fortinet", "ASA", "UTM", "ALLFLASH", "RDSaaS", "Workstation", "Cisco", "UCaaS", "Avaya"],
        link: "2-helping-hands-during-covid",
        content: content.covid19,
    },
    {
        title: "Huawei collaborating with BGUS ",
        description: "Empowering business growth - we will aggressively follow our vision to help our clients to grow...",
        date: "September 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/huawei.png",
        imgalt: "Huawei collaboration with BGUS",
        category: "Updates",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        link: "Huawei-and-BGUS",
        content: content.huawei,
        logo: "/assets/images/brands/huawei.png",
    },
    {
        title: "Peace of mind and 60% cost savings with Datacom@AirTrunk",
        headertitle: "",
        description: "It was towards the end of 2019 and the staff at Australian data and applications hosting specialist BG Unified Solutions were looking...",
        date: "23rd August 2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/datacom.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Updates",
        tags: ["infrastructure", "iaas", "BGU", "DDOS", "SYD1", "MEL1", "AirTrunk", "Datacom", "Saurabh", "Sareen", "data hosting", "infrastructure", "racks", "Network"],
        link: "3-collaboration-with-datacom-and-huawei",
        content: content.datacom,
    },
    {
        title: "A complete Office IT Infrastructure",
        headertitle: "",
        description: "An enterprise level solution for any small to medium size organization with single or multiple sites. This solution includes...",
        date: "23rd October 2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/it-infra.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Updates",
        tags: ["cisco", "DID", "Firewall", "WLC", "Apllication Server", "Backup", "Paloalto", "NOC", "CPU", "RAM", "SQL", "Backup", "Storage", "Warranty"],
        link: "4-Infra-for-medium-businesses",
        content: content.itInfra,
    },
    {
        title: "Launching a complete VDI/RDS as a Solution",
        headertitle: "",
        description: "We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using...",
        date: "September 2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/complete_vdi.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Updates",
        tags: ["RDS", "VDI", "POC", "SOE", "Office 365", "ConstantVDI", "VMWARE", "Acronis", "Backup", "Microsoft"],
        link: "5-VDI-as-a-Service",
        content: content.vdiaas,
    },
    {
        title: "Network Infrastructure Redesign | BG Unified Solutions",
        headertitle: "Network Infrastructure Redesign",
        description: "The primary purpose of the project was to redesign the network to achieve the following design criteria: ....",
        date: "2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/infra_redesign.jpg",
        imgalt: "Network Infrastructure Redesign | BG unified Solutions",
        category: "Case Study",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        link: "6-Network-Infrastructure-Redesign",
        content: content.networkinfra,
    },
    {
        title: "Data Center Design and Implementation",
        headertitle: "",
        description: "A client had a requirement to consolidate a distributed environment into a single highly available data center...",
        date: "2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/infra_redesign.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Case Study",
        tags: ["dispersed sites", "infrastructure", "dual-site", "dual-core", "network topology", "Enterprsie", "Storage Assesment", "data center", "Palo Alto", "Huawei 10G"],
        link: "7-Data-Center-Design-and-Implementation",
        content: content.dcdesign,
    },
    {
        title: "BG Unified Solutions Hosted UC Solution",
        description: "Hosted in NEXTDC, consisting of 18 UCS Server, C Series & B Series in the farm. Each UCS Server is running...",
        headertitle: "",
        date: "2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/infra.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Case Study",
        tags: ["Nimble", "WLC", "Nexus", "SourceFire", "Cisco ASA", "DC", "VMWARE", "ESX", "UCS", "NEXTDC", "NetApp", "SPLUNK", "CUBE", "SRST", "UC"],
        link: "8-BG-Unified-Solutions-Hosted-UC-Solution",
        content: content.hosteduc,
    },
    {
        title: "F5 Topology Redesign",
        headertitle: "",
        description: "F5 Configuration was redesigned and implemented in a recommended way. A lot of IRULES/POOLS defined to achieve the desired...",
        date: "2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/f5_redesign.png",
        imgalt: "Business Operations during COVID-19 Pandemic",
        category: "Case Study",
        tags: ["ASM", "PCI", "iApps", "TOMCAT", "IPs", "POOLS", "IRULES", "Load Balancer", "F5", "routers", "WAN"],
        link: "9-F5-Topology-Redesign",
        content: content.f5top,


    },
    {
        title: "Radware's Cloud WAF enhancing BGUS' Application Security",
        headertitle: "Radware's Cloud WAF enhancing Application Security",
        description: "Radware’s Cloud WAF Service to protect its website, BG Unified noticed blocked IP addresses in the...",
        date: "2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/radware/BGUS1.png",
        imgalt: "Radware's Cloud WAF enhancing BGUS' Application Security",
        category: "Case Study",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        link: "Radware-Cloud-WAF",
        content: content.radware,
        logo: "/assets/images/brands/radware.png",
        sideContent: [<CarSideVideo data={{
            title: "Radware Case Study",
            thumbnail: "/assets/images/videoThumbnails/radware.png",
            height: "80%",
            minW: "50%",
            body: <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6705379682822578176?compact=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        }}
        />,
        ]
    },
    {
        title: "Consolidation of the disparate distributed environment to a single managed platform",
        category: "Case Study",
        image: "/assets/images/newsroom/platform.jpg",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: "Through various acquisitions, a client environment consisted of over 17 Active Directory forests, each with a discrete workstation SOE and operational procedures. The client brief was to consolidate the environment into a single platform (Microsoft AD) to realize operational and support advantages. A single SOE was also a requirement.",
        solution: "Analysis into the existing environment allowed a current-state picture to be drawn up which informed the target-state architecture. Transitional steps were developed with the client and implementation realized the end-state as required.",
        redirectStatus: false,
        link: "Consolidation-of-the-disparate-distributed-environment-to-a-single-managed-platform"
    },
    {
        title: "Storage architecture and deployment of the replacement storage platform",
        category: "Case Study",
        image: "/assets/images/newsroom/storage.jpg",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: "Constant storage performance issues and capacity concerns led to an engagement to investigate and remediate the technical challenges currently being faced.",
        solution: "Investigations into the existing storage fabric highlighted a SAN that was not suited to the multiple workloads being run against it. The recommendation was to uplift the SAN storage array to one that was capable to support the IOPS and multiple workloads. Other valued technologies were storage tiering and reporting.A tendering process and subsequent recommendation to the client led to the acquisition of an HP 3Par array.The implementation of the array was scoped and we were further engaged to develop a technical architecture for implementation and migration.",
        redirectStatus: false,
        link: "Storage-architecture-and-deployment-of-the-replacement-storage-platform",
    }, {
        title: "Aligning technology spend using strategic road mapping",
        category: "Case Study",
        image: "/assets/images/newsroom/plan.jpg",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: "After an approach from a client complaining about ballooning technology budgets, we were tasked with producing a roadmap for the environment that would facilitate discussions with the business when allocating funds for IT.",
        solution: "A deep dive into the environment highlighted oversubscription in some areas and functional overlap in others which realized immediate significant savings. This deep dive included cross-matching with vendor roadmaps which allowed the client to forecast on a 3 monthly basis where budget (staff, licenses, infrastructure) would be allocated..", 
        redirectStatus: false,
        link: "Aligning-technology-spend-using-strategic-road-mapping",
    }, {
        title: "Mobility Strategy definition",
        category: "Case Study",
        image: "/assets/images/newsroom/mobile.jpg",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: "An increasing level of staff bringing their personal devices and connecting them to the corporate network led to a client tasking us with developing a mobility strategy for the enterprise. A principal concern was security (network and data) where the devices were uncontrolled and each one potentially a source of a data breach.",
        solution: "Analysis into the requirements led to the development of a corporate strategy, teamed with the deployment of Mobile Device Manager technology which immediately addressed the concerns of the business.", redirectStatus: false,
        link: "Mobility-Strategy-definition",
    }, {
        title: "Disaster Recovery Planning",
        image: "/assets/images/newsroom/dr.jpg",
        category: "Case Study",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: "When it was realized that some critical business systems had no capacity for recovery in the event of a disaster, we were engaged to develop not only a DR plan but to incorporate rollback.",
        solution: " From a technology perspective, a cloud IaaS provider was selected to host the DR infrastructure.", redirectStatus: false,
        link: "Disaster-Recovery-Planning",
    }, {
        title: "Public Internet Access System",
        image: "/assets/images/newsroom/access.jpg",
        category: "Case Study",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: "With many facilities open to the public, a business initiative was to provide a public internet access system to increase reputation.Requirements included wireless access and a secure desktop for those without computing devices.",
        solution: "A combination of technologies (Aruba, Citrix ThinClient, Google ChromeBox) was deployed to meet the customer’s requirements.", redirectStatus: false,
        link: "Public-Internet-Access-System",
    }, {
        title: "QoS Design and Implementation",
        category: "Case Study",
        image: "/assets/images/newsroom/qos.jpg",
        tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
        overview: " Design and Implement QoS across DC and more than 400 sites.",
        solution: "Designing the standard QoS template for the service providers to implement on PE Routers. Designing of the standard QoS template to be implemented on CE Routers.Commissioning and implementation of QoS on PE and CE Routers and investigating if QoS is working properly using various tools like Wireshark / nMetrics.", redirectStatus: false,
        link: "QoS-Design-and-Implementation",
    },
]


export default blogs