import { NextRequest, NextResponse } from 'next/server';

export type PostTypings = {
  fakeType: string;
};

export async function POST(request: NextRequest) {
  try {
    const {
      severity,
      message,
      functionName,
      gcpProject,
      serviceAccountEmail,
      serviceAccountKey,
      env,
    } = await request.json();

    if (
      !severity ||
      !message ||
      !functionName ||
      !gcpProject ||
      !serviceAccountEmail ||
      !serviceAccountKey ||
      !env
    ) {
      return NextResponse.json({ error: 'Invalid Request' }, { status: 500 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (console as any)[severity](message);

    return NextResponse.json({ message: 'Log sent to Google Cloud Logging!' }, { status: 200 });
  } catch (error) {
    console.error('Error logging to GCP:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
