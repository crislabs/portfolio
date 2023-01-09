'use client'

import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Article } from '@/src/interfaces/article';
import { HeadingDashboard } from './HeadingDashboard';
import { useQuery } from '@tanstack/react-query';
import { portfolioGetArticle } from '@/lib/article/getArticle';
import { useLocalStorageState } from 'ahooks';
import { MarkdownPreview } from './ArticleClient';


const markdown = `
# Query Clientss

###	<mark>**'queryClient'**</mark>

Se puede usar <mark>**'QueryClient'**</mark> para interactuar con un caché:

~~~js
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: fetchPosts })
~~~

Sus métodos disponibles son:

- <mark>**'queryClient.fetchQuery'**</mark>
- <mark>**'queryClient.fetchInfiniteQuery'**</mark>
- <mark>**'queryClient.prefetchQuery'**</mark>
- <mark>**'queryClient.prefetchInfiniteQuery'**</mark>
- <mark>**'queryClient.getQueryData'**</mark>
- <mark>**'queryClient.ensureQueryData'**</mark>
- <mark>**'queryClient.getQueriesData'**</mark>
- <mark>**'queryClient.setQueryData'**</mark>
- <mark>**'queryClient.getQueryState'**</mark>
- <mark>**'queryClient.setQueriesData'**</mark>
- <mark>**'queryClient.invalidateQueries'**</mark>
- <mark>**'queryClient.refetchQueries'**</mark>
- <mark>**'queryClient.cancelQueries'**</mark>
- <mark>**'queryClient.removeQueries'**</mark>
- <mark>**'queryClient.resetQueries'**</mark>
- <mark>**'queryClient.isFetching'**</mark>
- <mark>**'queryClient.isMutating'**</mark>
- <mark>**'queryClient.getLogger'**</mark>
- <mark>**'queryClient.getDefaultOptions'**</mark>
- <mark>**'queryClient.setDefaultOptions'**</mark>
- <mark>**'queryClient.getQueryDefaults'**</mark>
- <mark>**'queryClient.setQueryDefaults'**</mark>
- <mark>**'queryClient.getMutationDefaults'**</mark>
- <mark>**'queryClient.setMutationDefaults'**</mark>
- <mark>**'queryClient.getQueryCache'**</mark>
- <mark>**'queryClient.getMutationCache'**</mark>
- <mark>**'queryClient.clear'**</mark>
- <mark>**'queryClient.resumePausedMutations'**</mark>

Opciones: 

- <mark>**'queryCache?: QueryCache'**</mark>
	- Opcional
	- La caché de consultas a la que está conectado este cliente.
- <mark>**'mutationCache?: MutationCache'**</mark>
	-	Opcional
	- La caché de mutación a la que está conectado este cliente.
- <mark>**'logger?: Logger'**</mark>
	-	Opcional
	- El registrador que utiliza este cliente para registrar información de depuración, advertencias y errores. Si no se establece <mark>**console**</mark> es el registrador predeterminado.
- <mark>**defaultOptions?: DefaultOptions**</mark>
	- Opcional
	- Defina valores predeterminadors para todas las consultas y mutaciones mediante este <mark>queryClient</mark>


###	<mark>**'queryClient.fetchQuery'**</mark>

<mark>**'queryClient.fetchQuery'**</mark> es un método asíncrono que se puede usar para obtener y almacenar en caché una consulata. Se resolverá con los datos o arrojará el error. Utilice el método <mark>'prefetchQuery'</mark> si solo desea obtener una consulta sin necesitar el resultado.

Si la consulta existe y los datos no están invalidados o son más antiguos que los proporcionados <mark>'staleTime'</mark>, se devolverán los datos de la memoria caché. De lo contrario, intentará obtener los datos más recientes.

> La diferencia entre usar <mark>**'fetchQuery'**</mark> y <mark>**'setQueryData'**</mark> es que <mark>**'fetchQuery'**</mark> es asíncrono y garantizará que no se creen solicitudes duplicadas para esta consulta  <mark>**'useQuery'**</mark> con instancias para la misma consulta mientras se obtienen los datos.

~~~ts
	try {
		const data = await queryClient.fetchQuery({ queryKey, queryFn })
	} catch (error) {
		console.log(error).
}
~~~

Especifique a <mark>**staleTime**</mark> para obtener solo cuando los datos tengan más de una cierta cantidad de tiempo:

~~~ts
	try {
		const data = await queryClient.fetchQuery({ queryKey, queryFn, staleTime: 10000 })
	} catch (error) {
		console.log(error)
	}
~~~

### Opciones

Las opciones de <mark>**fetchQuery**</mark> son exactamente las mismas que las de <mark>**useQuery**</mark>, excepto las siguientes: <mark>** enabled, refetchInterval, refetchIntervalInBackground, refetchOnWindowFocus, refetchOnReconnect, notifyOnChangeProps, onSuccess, onError, onSettled, useErrorBoundary, select, suspense, keepPreviousData, placeholderData**</mark>; que son estrictamente para useQuery y useInfiniteQuery. Puede consultar el [código fuente](#) para mayor claridad.

### Devoluciones
- <mark>**Promise &lt;TData&gt;**</mark> 

###	<mark>**queryClient.fetchInfiniteQuery**</mark>

<mark>**fetchInfiniteQueryes**</mark> similar <mark>**fetchQuery**</mark> pero se puede usar para obtener y almacenar en caché una consulta infinita.
~~~ts
try {
  const data = await queryClient.fetchInfiniteQuery({ queryKey, queryFn })
  console.log(data.pages)
} catch (error) {
  console.log(error)
}
~~~

### Opciones


`;
interface Props {
  article: Article
  id: string
}




export function Post(props: Props) {
  const { article, id } = props
  const { data: post } = useQuery({
    queryKey: ['portfolio-get-article', id],
    queryFn: () => portfolioGetArticle(id),
    initialData: article,
  });
  // const [ content ] = useLocalStorageState<string | undefined>(
  //   post.slug as string
  // );
  // console.log('content', content)
  return (
    <React.Fragment>
      <HeadingDashboard title='Article Editor' article={post} />
      <article className="max-w-2xl px-6 py-6 mx-auto space-y-12  text-gray-900">
        <div className="w-full mx-auto space-y-4 text-center">

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {post.dataArticle.seoArticle.title}
          </h1>

        </div>
        <div className="text-gray-800 prose max-w-none prose-pre:p-0 prose-pre:bg-inherit">
          {/* <Markdown>
            {post.dataArticle.content || ''}
          </Markdown> */}
          <MarkdownPreview markdown={post.dataArticle.content || ''}/>
        </div>

      </article>
    </React.Fragment>
  );
}