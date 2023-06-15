/* eslint-disable @next/next/no-server-import-in-page */
import { CookieNames } from '@/lib/constants';
import { NextRequest, NextResponse } from 'next/server';

const signedInPages = ['/', '/playlist', '/library'];

export default function middleware(req: NextRequest) {
	if (signedInPages.find((path) => path === req.nextUrl.pathname)) {
		const token = req.cookies.get(CookieNames.TRAX_ACCESS_TOKEN)?.value;

		if (!token) {
			const url = req.nextUrl.clone();
			url.pathname = '/signin';

			return NextResponse.redirect(url);
		}
	}
}
