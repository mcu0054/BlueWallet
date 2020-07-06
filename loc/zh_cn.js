module.exports = {
  _: {
    storage_is_encrypted: '你的信息已经被加密， 请输入密码解密',
    enter_password: '输入密码',
    bad_password: '密码无效，请重试',
    never: '不',
    continue: '继续',
    ok: '好的',
  },
  wallets: {
    select_wallet: '选择钱包',
    options: '选项',
    createBitcoinWallet: '您当前没有bitcoin钱包. 为了支持闪电钱包, 我们需要创建或者导入一个比特币钱包. 是否需要继续?',
    list: {
      app_name: 'BlueWallet',
      title: '钱包',
      header: '一个钱包代表一对的私钥和地址' + '你可以通过分享收款.',
      add: '添加钱包',
      create_a_wallet: '添加钱包',
      create_a_wallet1: '创建钱包是免费的，你可以',
      create_a_wallet2: '想创建多少就创建多少个',
      create_a_button: '现在添加',
      latest_transaction: '最近的转账',
      empty_txs1: '你的转账信息将展示在这里',
      empty_txs2: '当前无信息',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: '点击购买比特币',
    },
    reorder: {
      title: '重新排列钱包',
    },
    add: {
      title: '添加钱包',
      description: '你可以扫描你的纸质备份钱包 (WIF格式), 或者创建一个新钱包. 默认支持隔离见证钱包',
      scan: '扫描',
      create: '创建',
      label_new_segwit: '新隔离见证(Segwit)',
      label_new_lightning: '新闪电',
      wallet_name: '钱包名称',
      wallet_type: '类型',
      or: '或',
      import_wallet: '导入钱包',
      imported: '已经导入',
      coming_soon: '即将来临',
      lightning: '闪电',
      bitcoin: '比特币',
      entropy_provide: 'Provide entropy via dice rolls',
      entropy_generated: '{gen} bytes of generated entropy',
      entropy_remain: '{gen} bytes of generated entropy. Remaining {rem} bytes will be obtained from the System random number generator.',
    },
    details: {
      title: '钱包',
      address: '地址',
      master_fingerprint: 'Master fingerprint',
      type: '类型',
      label: '标签',
      destination: '目的',
      description: '描述',
      are_you_sure: '你确认么?',
      yes_delete: '是的，删除',
      no_cancel: '不，取消',
      delete: '删除',
      save: '保存',
      delete_this_wallet: '删除这个钱包',
      export_backup: '导出备份',
      buy_bitcoin: '购买比特币',
      show_xpub: '展示钱包 XPUB',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: '钱包导出',
    },
    xpub: {
      title: '钱包 XPUB',
      copiedToClipboard: '复制到粘贴板.',
    },
    import: {
      title: '导入',
      explanation: '输入你的助记词，私钥或者WIF, 或者其他格式的数据. BlueWallet将尽可能的自动识别数据格式并导入钱包',
      imported: '已经导入',
      error: '导入失败，请确认你提供的信息是有效的',
      success: '成功',
      do_import: '导入',
      scan_qr: '或扫面二维码',
    },
    scanQrWif: {
      go_back: '回退',
      cancel: '取消',
      decoding: '解码中',
      input_password: '输入密码',
      password_explain: '这是一个BIP38加密的私钥',
      bad_password: '密码错误',
      wallet_already_exists: '当前钱包已经存在',
      bad_wif: 'WIF格式无效',
      imported_wif: 'WIF已经导入',
      with_address: ' 地址为',
      imported_segwit: 'SegWit已经导入',
      imported_legacy: 'Legacy已经导入',
      imported_watchonly: '导入只读',
    },
  },
  transactions: {
    list: {
      tabBarLabel: '转账',
      title: '转账',
      description: '当前所有钱包的转入和转出记录',
      conf: '配置',
    },
    details: {
      title: '转账',
      from: '输入',
      to: '输出',
      copy: '复制',
      transaction_details: '转账详情',
      show_in_block_explorer: '区块浏览器展示',
    },
  },
  send: {
    header: '发送',
    details: {
      title: '创建交易',
      amount_field_is_not_valid: '金额格式无效',
      fee_field_is_not_valid: '费用格式无效',
      address_field_is_not_valid: '地址内容无效',
      total_exceeds_balance: '余额不足',
      create_tx_error: '创建交易失败. 请确认地址格式正确.',
      address: '地址',
      amount_placeholder: '发送金额(in BTC)',
      fee_placeholder: '手续费用 (in BTC)',
      note_placeholder: '消息',
      cancel: '取消',
      scan: '扫描',
      send: '发送',
      create: '创建',
      remaining_balance: '剩余金额',
    },
    confirm: {
      header: '确认',
      sendNow: '现在发送',
    },
    success: {
      done: '完成',
      lnurlpay_repeat: 'Repeat payment',
    },
    create: {
      details: '详情',
      title: '创建详情',
      error: '创建交易失败. 无效地址或金额?',
      go_back: '回退',
      this_is_hex: '这个是交易的十六进制数据, 签名并广播到全网络.',
      to: '到',
      amount: '金额',
      fee: '手续费',
      tx_size: '交易大小',
      satoshi_per_byte: '葱每byte',
      memo: '消息',
      broadcast: '广播',
      not_enough_fee: '手续费不够，请增加手续费',
    },
  },
  receive: {
    header: '收款',
    details: {
      title: '分享这个地址给付款人',
      share: '分享',
      copiedToClipboard: '复制到粘贴板.',
      label: '描述',
      create: '创建',
      setAmount: '收款金额',
    },
  },
  buyBitcoin: {
    header: '购买比特币',
    tap_your_address: '点击地址复制到粘贴板:',
    copied: '复制到粘贴板!',
  },
  settings: {
    header: '设置',
    plausible_deniability: '可否认性...',
    storage_not_encrypted: '存储:未加密',
    storage_encrypted: '存储:加密中',
    password: '密码',
    password_explain: '创建你的加密密码',
    retype_password: '再次输入密码',
    passwords_do_not_match: '两次输入密码不同',
    encrypt_storage: '加密存储',
    lightning_settings: '闪电网络设置',
    lightning_settings_explain: '如要要连接你自己的闪电节点请安装LndHub' + ' 并把url地址输入到下面. 空白将使用默认的LndHub (lndhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: '保存',
    about: '关于',
    language: '语言',
    currency: '货币',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: '可否认性',
    help:
      '在某些情况下, 你不得不暴露 ' +
      '密码. 为了让你的比特币更加安全, BlueWallet可以创建一些 ' +
      '加密空间, 用不同的密码. 在压力之下, ' +
      '你可以暴露这个钱包密码. 再次进入 ' +
      'BlueWallet, 我们会解锁一些虚拟空间. 对第三方来说看上去' +
      '是合理的, 但会偷偷的帮你保证主钱包的安全 ' +
      '币也就安全了.',
    help2: '新的空间具备完整的功能，你可以存在 ' + '少量的金额在里面.',
    create_fake_storage: '创建虚拟加密存储',
    go_back: '回退',
    create_password: '创建密码',
    create_password_explanation: '虚拟存储空间密码不能和主存储空间密码相同',
    password_should_not_match: '虚拟存储空间密码不能和主存储空间密码相同',
    retype_password: '重输密码',
    passwords_do_not_match: '两次输入密码不同，请重新输入',
    success: '成功',
  },
  lnd: {
    title: '配置资金支持',
    choose_source_wallet: '选择一个资金源钱包',
    refill_lnd_balance: '给闪电钱包充值',
    refill: '充值',
    withdraw: '提取',
    exchange: 'Exchange',
    expired: '超时',
    sameWalletAsInvoiceError: '你不能用创建账单的钱包去支付该账单',
    placeholder: 'Invoice',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
  entropy: {
    title: 'Entropy',
    save: 'Save',
    undo: 'Undo',
  },
};
