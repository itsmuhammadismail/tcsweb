import Head from "next/head";
import Layout from "../../components/Layout";

const KhalidAwan = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#fcfcfc] pt-[2rem]">
          <div className="max-w-[70rem] mx-auto px-6 flex justify-between items-end">
            <div className="mb-[4rem]">
              <h1 className="text-[40px] font-bold">Khalid Nawaz Awan</h1>
              <p>Founder and Chairman</p>
            </div>
            <img src="/leadership/khalid.png" alt="" className="h-[26rem]" />
          </div>
        </div>
        <div className="max-w-[50rem] mx-auto my-[4rem] flex flex-col justify-center items-center text-center gap-6">
          <p>
            Khalid Awan was born in Dera-Ismail-Khan and is a Mechanical
            Engineer by education, a profession in which he started his career.
          </p>
          <p>
            He entered business in 1982 when his older brother established a
            Joint Venture in Pakistan with the global air-express giant DHL,
            under the name DHL Pakistan Private Ltd.
          </p>
          <p>
            The brothers then founded TCS Private Ltd. as the domestic arm
            complementing the international business. The first decade saw
            phenomenal growth in the jointly owned and managed business.
          </p>
          <p>
            The future potential in each business – domestic and international,
            necessitated long term structuring. The brothers astutely addressed
            this in 1991 by ‘de-linking’ the organization and ownership of the
            two companies, enabling each to pursue its own trajectory.
          </p>
          <p>
            It was thus in 1991 that Khalid Awan, who had served as Managing
            Director, since inception, of both TCS and DHL Pakistan under the
            Chairmanship of Sadiq Awan, took over as the Chairman and M.D. of
            TCS Private Limited.
          </p>
          <p>
            The challenges and implications of this decision are the subject of
            a Harvard Business School Case Study undertaken in 2002.
          </p>
          <p>
            Between then and 2007 when Sadiq Awan disinvested his share-holding
            in DHL Pakistan, TCS and DHL maintained a collaborative
            non-competitive relationship.
          </p>
          <p>
            Khalid Awan not only piloted the evolution of TCS in Pakistan but
            also went on to establish TCS in UK (1989), UAE (1996), and Canada
            (1999).
          </p>
          <p>
            On the 30th anniversary of its founding in 2013, Khalid Awan
            outlined for TCS its course for the next thirty years by installing
            a futuristic young leadership, guided by a mission statement and
            core-values in a world class corporate environment overseen by a
            competent Board.
          </p>
          <p>
            Mr. Awan is an active philanthropist who generously contributes to
            organizations in the field of health, education, and social welfare.
          </p>
          <p>
            He is a lifetime member of 'World Presidents Organization' - WPO,
            and has served as Chairman of Khalid Nawaz Awan Foundation and
            Chairman TCS Holdings Private Limited YPO Pakistan Chapter. He has
            chaired the 'Corporate Award Committee of the Management Association
            of Pakistan (MAP) and serves on the Pakistan National Committee of
            the International Chambers of Commerce (ICC), and the Board of
            Governors - Karachi Council of Foreign Relations and Community
            Advisory Board of the Aga Khan University Hospital, Karachi.
          </p>
          <p>
            He served on the Paris based Transportation Committee of the ICC
            from 1997-2007, and represented it at the United Nations 2003
            General Assembly Session on Millennium Development Goals.
          </p>
          <p>
            He has also advised the Government of Pakistan on development of
            Pakistan Postal Services.
          </p>
          <p>
            Mr. Awan is a member of the Chartered Institute of Transport, and
            Fellow of the Royal Aeronautical Society.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default KhalidAwan;
