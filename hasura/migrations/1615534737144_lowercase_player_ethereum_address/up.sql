UPDATE raider SET ethereum_address=lower(ethereum_address) WHERE ethereum_address IS NOT NULL;
