import type { APIRoute, GetStaticPaths } from 'astro';
import { INDEXNOW_KEY } from '../config';

/**
 * Confirmation file for IndexNow. The protocol requires the key itself to be
 * served at https://<domain>/<key>.txt — that is how Bing and Yandex verify
 * that whoever pings them owns the site.
 *
 * While no key is set, the route is not built at all.
 */
export const getStaticPaths: GetStaticPaths = () =>
  INDEXNOW_KEY ? [{ params: { key: INDEXNOW_KEY } }] : [];

export const GET: APIRoute = () =>
  new Response(INDEXNOW_KEY, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
