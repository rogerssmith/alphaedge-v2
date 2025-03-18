import mongooseConnect from "@/lib/mongoose";
import Company from "@/models/Company";

export const getCompanyData = async () => {
  await mongooseConnect();
  let initialCompany: CompanyProps | null;
  const companies = await Company.find<CompanyProps>({});

  if (companies.length <= 0) {
    const newCompany = new Company({ name: "Enter company name" });
    const savedCompany = await newCompany.save();
    initialCompany = savedCompany;
  } else {
    initialCompany = companies[0];
  }

  const plainObject: CompanyProps = JSON.parse(JSON.stringify(initialCompany));
  return plainObject;
};
