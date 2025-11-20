"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const StudentPersonalInfo = () => {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    mobile: "",
    whatsapp: "",
    cnic: "",
    cnicFront: null,
    dob: "",
    crn: "",
    riseId: "",
    bloodGroup: "",
    gender: "male",
    email: "",
    city: "",
    province: "",
    address: "",
    fatherFirstName: "",
    fatherLastName: "",
    fatherCnic: "",
    fatherMobile: "",
    emergencyName: "",
    emergencyMobile: "",
    feeVoucher: null,
    caf01Normal: "",
    caf01Brisk: "",
    caf01Long: "",
    caf02Normal: "",
    caf02Long: "",
    caf03Normal: "",
    caf03Long: "",
    caf04Normal: "",
    caf04Brisk: "",
    caf04Long: "",
    caf05Normal: "",
    caf06Normal: "",
    caf07Normal: "",
    caf08Normal: "",
  });

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (key: string, file: File | null) => {
    setFormData((prev: any) => ({ ...prev, [key]: file }));
  };

  const getFee = (val: string) => {
    if (!val) return 0;
    const match = val.match(/\[Fee:\s?([\d,]+)\]/);
    if (match) {
      return parseInt(match[1].replace(/,/g, ""), 10);
    }
    return 0;
  };

  const totalFee = useMemo(() => {
    const keys = [
      "caf01Normal",
      "caf01Brisk",
      "caf01Long",
      "caf02Normal",
      "caf02Long",
      "caf03Normal",
      "caf03Long",
      "caf04Normal",
      "caf04Brisk",
      "caf04Long",
      "caf05Normal",
      "caf06Normal",
      "caf07Normal",
      "caf08Normal",
    ];
    return keys.reduce((sum, key) => sum + getFee(formData[key]), 0);
  }, [formData]);

  const handleSubmit = () => {
    console.log("FormData:", formData);
  };

  return (
    <div className="space-y-8 pt-12 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold">Student Personal Information</h2>
        <p className="text-sm text-gray-500">
          Dear Student, write your details carefully and accurately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="pb-2">Student First Name</Label>
          <Input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Student Last Name</Label>
          <Input
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Mobile Number</Label>
          <Input
            placeholder="e.g. 0300 1234567"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Whatsapp Number</Label>
          <Input
            placeholder="e.g. 0300 1234567"
            value={formData.whatsapp}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">CNIC Number</Label>
          <Input
            placeholder="3920102155597"
            value={formData.cnic}
            onChange={(e) => handleChange("cnic", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Upload CNIC/B.Form Front Side *</Label>
          <Input
            type="file"
            onChange={(e) =>
              handleFileChange("cnicFront", e.target.files?.[0] || null)
            }
          />
        </div>

        <div>
          <Label className="pb-2">Date of Birth</Label>
          <Input
            type="date"
            value={formData.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">ICAP CRN#</Label>
          <Input
            placeholder="e.g. 123456"
            value={formData.crn}
            onChange={(e) => handleChange("crn", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">RISE ID (Optional)</Label>
          <Input
            placeholder="Optional"
            value={formData.riseId}
            onChange={(e) => handleChange("riseId", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Blood Group</Label>
          <Input
            placeholder="e.g. B+"
            value={formData.bloodGroup}
            onChange={(e) => handleChange("bloodGroup", e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label className="pb-2">Gender</Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => handleChange("gender", value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="pb-2">Email ID</Label>
          <Input
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">City</Label>
          <Input
            placeholder="City Name"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Province</Label>
          <Input
            placeholder="Province"
            value={formData.province}
            onChange={(e) => handleChange("province", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">Address</Label>
          <Textarea
            placeholder="Complete Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Father First Name</Label>
          <Input
            placeholder="Father's First Name"
            value={formData.fatherFirstName}
            onChange={(e) => handleChange("fatherFirstName", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Father Last Name</Label>
          <Input
            placeholder="Father's Last Name"
            value={formData.fatherLastName}
            onChange={(e) => handleChange("fatherLastName", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Father CNIC Number</Label>
          <Input
            placeholder="3920102155597"
            value={formData.fatherCnic}
            onChange={(e) => handleChange("fatherCnic", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Father Mobile Number</Label>
          <Input
            placeholder="0300 1234567"
            value={formData.fatherMobile}
            onChange={(e) => handleChange("fatherMobile", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Emergency Contact Person</Label>
          <Input
            placeholder="Name other than parent/guardian"
            value={formData.emergencyName}
            onChange={(e) => handleChange("emergencyName", e.target.value)}
          />
        </div>

        <div>
          <Label className="pb-2">Emergency Contact Number</Label>
          <Input
            placeholder="0300 1234567"
            value={formData.emergencyMobile}
            onChange={(e) => handleChange("emergencyMobile", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-01 (FAR) Normal Batch</Label>
          <Select
            value={formData.caf01Normal}
            onValueChange={(val) => handleChange("caf01Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Naveed Ansari (FCA) [Fee: 12,000]">
                Mr. Naveed Ansari (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-01 (FAR) Brisk Batch</Label>
          <Select
            value={formData.caf01Brisk}
            onValueChange={(val) => handleChange("caf01Brisk", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Naveed Ansari (FCA) [Fee: 12,000]">
                Mr. Naveed Ansari (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-01 (FAR) Long Batch</Label>
          <Select
            value={formData.caf01Long}
            onValueChange={(val) => handleChange("caf01Long", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Naveed Ansari (FCA) [Fee: 12,000]">
                Mr. Naveed Ansari (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-02 (TAX) Normal Batch</Label>
          <Select
            value={formData.caf02Normal}
            onValueChange={(val) => handleChange("caf02Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Zahid Qavi (FCA) [Fee: 12,000]">
                Mr. Zahid Qavi (FCA) [Fee: 12,000]
              </SelectItem>
              <SelectItem value="Mr. Sajjad Ahmad Malik ACCA, CA (FIN), MA (ECO), LLB [Fee: 12,000]">
                Mr. Sajjad Ahmad Malik ACCA, CA (FIN), MA (ECO), LLB [Fee:
                12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-02 (TAX) Long Batch</Label>
          <Select
            value={formData.caf02Long}
            onValueChange={(val) => handleChange("caf02Long", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Sajjad Ahmad Malik ACCA, CA (FIN), MA (ECO), LLB [Fee: 12,000]">
                Mr. Sajjad Ahmad Malik ACCA, CA (FIN), MA (ECO), LLB [Fee:
                12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-03 (DSR) Normal Batch</Label>
          <Select
            value={formData.caf03Normal}
            onValueChange={(val) => handleChange("caf03Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Ashraf Rehman Phd scholar; M-Phil (IT), MBA (MIS), BCS (H) [Fee: 12,000]">
                Mr. Ashraf Rehman Phd scholar; M-Phil (IT), MBA (MIS), BCS (H)
                [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-03 (DSR) Long Batch</Label>
          <Select
            value={formData.caf03Long}
            onValueChange={(val) => handleChange("caf03Long", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Ashraf Rehman Phd scholar; M-Phil (IT), MBA (MIS), BCS (H) [Fee: 12,000]">
                Mr. Ashraf Rehman Phd scholar; M-Phil (IT), MBA (MIS), BCS (H)
                [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-04 (BLD) Normal Batch</Label>
          <Select
            value={formData.caf04Normal}
            onValueChange={(val) => handleChange("caf04Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Zahid Qavi (FCA) [Fee: 12,000]">
                Mr. Zahid Qavi (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-04 (BLD) Brisk Batch</Label>
          <Select
            value={formData.caf04Brisk}
            onValueChange={(val) => handleChange("caf04Brisk", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Zahid Qavi (FCA) [Fee: 12,000]">
                Mr. Zahid Qavi (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-04 (BLD) Long Batch</Label>
          <Select
            value={formData.caf04Long}
            onValueChange={(val) => handleChange("caf04Long", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Zahid Qavi (FCA) [Fee: 12,000]">
                Mr. Zahid Qavi (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-05 (MA) Normal Batch</Label>
          <Select
            value={formData.caf05Normal}
            onValueChange={(val) => handleChange("caf05Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Adnan Rasheed (FCA) [Fee: 12,000]">
                Mr. Adnan Rasheed (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-06 (CR) Normal Batch</Label>
          <Select
            value={formData.caf06Normal}
            onValueChange={(val) => handleChange("caf06Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Naveed Ansari (FCA) [Fee: 12,000]">
                Mr. Naveed Ansari (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-07 (BIA) Normal Batch</Label>
          <Select
            value={formData.caf07Normal}
            onValueChange={(val) => handleChange("caf07Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Adnan Rasheed (FCA) [Fee: 12,000]">
                Mr. Adnan Rasheed (FCA) [Fee: 12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label className="pb-2">CAF-08 (AUD) Normal Batch</Label>
          <Select
            value={formData.caf08Normal}
            onValueChange={(val) => handleChange("caf08Normal", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. Nausherwan Khawaja (FCA) [Fee: 12,000]">
                Mr. Nausherwan Khawaja (FCA) [Fee: 12,000]
              </SelectItem>
              <SelectItem value="Mr. Sajjad Ahmad Malik ACCA, CA (FIN), MA (ECO), LLB [Fee: 12,000]">
                Mr. Sajjad Ahmad Malik ACCA, CA (FIN), MA (ECO), LLB [Fee:
                12,000]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="md:col-span-2 mt-4">
        <Label className="pb-2">Total Amount (PKR)</Label>
        <Input
          value={totalFee.toLocaleString()}
          readOnly
          className="font-semibold text-lg bg-gray-100"
        />
      </div>

      <div className="md:col-span-2 mt-6 p-4 border rounded bg-gray-50">
        <h3 className="font-semibold text-lg pb-2">
          Deposit Your Fee in Following Bank Account
        </h3>
        <p>
          <strong>Account Title:</strong> Rise Premier Virtual Pvt. Ltd.
        </p>
        <p>
          <strong>Account Number:</strong> 02680105147134
        </p>
        <p>
          <strong>Bank Branch:</strong> Meezan Bank Faisal Town Branch, Lahore
        </p>
      </div>

      <div className="md:col-span-2 mt-4">
        <Label className="pb-2">
          Upload Paid Fee Voucher (Bank Deposit Slip)
        </Label>
        <Input
          type="file"
          onChange={(e) =>
            handleFileChange("feeVoucher", e.target.files?.[0] || null)
          }
        />
      </div>

      <Button className="w-full py-6 text-lg mt-6" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default StudentPersonalInfo;
