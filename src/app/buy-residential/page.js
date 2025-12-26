import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";

export const dynamic = 'force-dynamic';

async function BuyResidentials({ searchParams }) {
  try {
    await connectDB();
    const profiles = await Profile.find({ published: true }).select("-userId");

    let finalData = profiles;
    if (searchParams.category) {
      finalData = finalData.filter((i) => i.category === searchParams.category);
    }

    return <BuyResidentialsPage data={finalData} />;
  } catch (error) {
    console.log(error);
    return <h3>مشکلی پیش آمده است</h3>;
  }
}

export default BuyResidentials;
