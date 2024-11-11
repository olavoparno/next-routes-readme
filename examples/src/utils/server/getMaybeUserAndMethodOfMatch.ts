'use server';

/*
If you're wondering what all the prisma type signatures are for, this allows people to pass additional prismaClient.user.findFirst arguments in
These arguments change the actual shape of the returned result (select and include for example) so we need to use generics to ensure we get the full type-safe result back
*/
async function baseGetMaybeUserAndMethodOfMatch() {
  return {
    user: {
      userActions: [
        {
          actionType: 'TEST',
          campaignName: 'TEST_CAMPAIGN',
        },
      ],
    },
    methodOfMatch: undefined,
  };
}

// useful when you don't want to flag sentry errors for the select few clients who load the site without cookies enabled
export async function getMaybeUserAndMethodOfMatchWithMaybeSession() {
  return baseGetMaybeUserAndMethodOfMatch();
}
