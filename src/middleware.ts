/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from 'next/server';

const signedInPages = ['/', '/playlist', '/library'];

export default function middleware(req: NextRequest) {
	if (signedInPages.find((path) => path === req.nextUrl.pathname)) {
		const token = req.cookies.TRAX_ACCESS_TOKEN;

		if (!token) {
			const url = req.nextUrl.clone();
			url.pathname = '/signin';

			return NextResponse.rewrite(url);
		}
	}
}
