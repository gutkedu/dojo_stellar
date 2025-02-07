export interface BlockLinks {
  self: {
    href: string;
  };
  transactions: {
    href: string;
    templated: boolean;
  };
  operations: {
    href: string;
    templated: boolean;
  };
  payments: {
    href: string;
    templated: boolean;
  };
  effects: {
    href: string;
    templated: boolean;
  };
}

export interface BlockResponse {
  _links: BlockLinks;
  id: string;
  paging_token: string;
  hash: string;
  prev_hash: string;
  sequence: number;
  successful_transaction_count: number;
  failed_transaction_count: number;
  operation_count: number;
  tx_set_operation_count: number;
  closed_at: string;
  total_coins: string;
  fee_pool: string;
  base_fee_in_stroops: number;
  base_reserve_in_stroops: number;
  max_tx_set_size: number;
  protocol_version: number;
  header_xdr: string;
}
