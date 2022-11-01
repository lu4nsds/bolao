import Fastify from "fastify";

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    })

    fastify.get('/pools/count', ()=> {
        return {count: 2000}
    })

    fastify.get('/', ()=> {
        return {count: 'LUAN'}
    })


    await fastify.listen({port: 3333})
}

bootstrap()