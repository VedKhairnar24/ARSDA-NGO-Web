import { funding } from '../data/ngo'

export default function FundingPage() {
  return (
    <div>
      <h2>Research & Funding</h2>
      <ul>
        <li><strong>General Membership Fees</strong>: {funding.generalMembershipFee}</li>
        <li><strong>Lifetime Membership Fees</strong>: {funding.lifetimeMembershipFee}</li>
        <li><strong>Donations</strong>: {funding.donations}</li>
        <li><strong>Government Funding</strong>: {funding.governmentFunding}</li>
        <li><strong>CSR Funding</strong>: {funding.csrFunding}</li>
      </ul>
    </div>
  )
}


