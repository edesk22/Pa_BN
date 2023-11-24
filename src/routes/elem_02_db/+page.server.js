// +page.server.js //Esto es un endpoint
import { query } from '$lib/db';

export async function load() {
    let rawData = await query('SELECT * FROM Customers');
    // Convertir cada fila en un objeto plano
    const data = rawData.map((/** @type {any} */ row) => {
        // Suponiendo que row es un objeto que necesita ser convertido
        return {...row};
    });
    return { props: { data } };
}
