export const Blog = () => {
  return(
  <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-green-800">Nuestro Blog</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">¡Hola a todos! Nos complace compartir algunas actualizaciones emocionantes de nuestra tienda de comestibles.</p>
            </div> 
            <div class="grid gap-8 lg:grid-cols-2">
                <article class="p-6 bg-green-800 rounded-lg border border-gray-200 shadow-md ">
                    <div class="flex justify-between items-center mb-5 text-gray-200">
                        <span class="text-sm">Hace 14 Dias</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Nuevos Productos</a></h2>
                    <p class="mb-5 font-light text-gray-200">Estamos emocionados de anunciar que hemos ampliado nuestra gama de productos orgánicos y locales. Ahora ofrecemos una variedad más amplia de frutas y verduras frescas, productos lácteos y carnes de granjas locales. ¡Ven y descubre la frescura y calidad de los alimentos cultivados localmente!</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white">
                                Fabricio Bencomo
                            </span>
                        </div>
                    </div>
                </article> 
                <article class="p-6 bg-green-800 rounded-lg border border-gray-200 shadow-md ">
                    <div class="flex justify-between items-center mb-5 text-gray-200">
                        <span class="text-sm">Hace 14 Dias</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Ofertas Especiales</a></h2>
                    <p class="mb-5 font-light text-gray-200 ">Este mes, tenemos ofertas especiales en varios productos. Asegúrate de revisar nuestro folleto de ofertas cuando visites la tienda. ¡No querrás perderte estas increíbles ofertas!</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                            <span class="font-medium dark:text-white">
                                Jhon Doe
                            </span>
                        </div>
                    </div>
                </article>                  
            </div>  
        </div>
    </section>
  )
}