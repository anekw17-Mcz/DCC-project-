<!DOCTYPE html>
<html lang="th">
<head>
  <base target="_top">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<style>

    :root {
        --primary:       #1d4ed8;
        --primary-dark:  #1e3a8a;
        --primary-light: #dbeafe;
        --accent:        #0891b2;
        --accent-light:  #cffafe;
        --success:       #059669;
        --success-light: #d1fae5;
        --warning:       #d97706;
        --warning-light: #fef3c7;
        --danger:        #dc2626;
        --danger-light:  #fee2e2;
        --purple:        #7c3aed;
        --purple-light:  #ede9fe;
        --bg-body:       #f0f4f8;
        --card-bg:       #ffffff;
        --text-primary:  #0f172a;
        --text-secondary:#475569;
        --text-muted:    #94a3b8;
        --border-color:  #e2e8f0;
        --border-light:  #f1f5f9;
        --shadow-sm:  0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08);
        --shadow-md:  0 4px 12px -1px rgb(0 0 0 / 0.12), 0 2px 6px -2px rgb(0 0 0 / 0.08);
        --shadow-lg:  0 10px 30px -3px rgb(0 0 0 / 0.15), 0 4px 10px -4px rgb(0 0 0 / 0.1);
        --shadow-xl:  0 20px 50px -5px rgb(0 0 0 / 0.2);
        --radius-sm:  6px;
        --radius-md:  12px;
        --radius-lg:  18px;
        --radius-xl:  28px;
        --radius-2xl: 36px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1d4ed8 70%, #0891b2 100%);
        background-attachment: fixed;
        font-family: 'IBM Plex Sans Thai', 'Sarabun', sans-serif;
        color: var(--text-primary);
        padding-bottom: 80px;
        min-height: 100vh;
    }

    /* LOGIN PAGE STYLES */
    .login-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
    }

    .login-card {
        background: white;
        border-radius: var(--radius-xl);
        padding: 50px 40px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        max-width: 450px;
        width: 100%;
        animation: slideUp 0.5s ease;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .login-logo {
        text-align: center;
        margin-bottom: 40px;
    }

    .login-logo i {
        font-size: 4rem;
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 15px;
    }

    .login-logo h2 {
        font-weight: 800;
        color: var(--primary);
        margin-bottom: 5px;
    }

    .login-logo p {
        color: var(--text-secondary);
        font-size: 0.95rem;
    }

    .login-form .form-group {
        margin-bottom: 25px;
    }

    .login-form label {
        font-weight: 700;
        color: var(--primary);
        font-size: 0.9rem;
        margin-bottom: 8px;
        display: block;
    }

    .login-form input {
        width: 100%;
        padding: 14px 18px;
        border: 2px solid var(--border-color);
        border-radius: var(--radius-md);
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s;
    }
    .login-form .input-group .btn {
        border: 2px solid var(--border-color);
        border-left: none;
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        color: var(--primary);
        background: #fff;
        padding: 0 18px;
        font-weight: 700;
        transition: all 0.2s;
    }
    .login-form .input-group .btn:hover {
        border-color: var(--primary);
        background: rgba(37, 99, 235, 0.06);
    }
    .login-form .input-group .form-control {
        border-right: none;
        border-radius: var(--radius-md) 0 0 var(--radius-md);
    }


    .login-form input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }

    .btn-login {
        width: 100%;
        padding: 16px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        border: none;
        border-radius: var(--radius-xl);
        font-size: 1.1rem;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: var(--shadow-lg);
        margin-top: 10px;
    }

    .btn-login:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4);
    }

    .btn-login:active {
        transform: translateY(0);
    }

    .main-wrapper {
        background: var(--bg-body);
        min-height: 100vh;
        padding-top: 20px;
        display: none;
    }

    .main-wrapper.active {
        display: block;
    }

    .header-banner {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%);
        color: white;
        padding: 28px 24px 32px;
        text-align: center;
        border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
        margin-bottom: 24px;
        box-shadow: 0 8px 32px rgba(29,78,216,0.4);
        position: relative;
        overflow: hidden;
    }

    .header-banner::before {
        content: "";
        position: absolute;
        top: -60%;
        right: -30%;
        width: 60%;
        height: 200%;
        background: radial-gradient(ellipse, rgba(8,145,178,0.3) 0%, transparent 65%);
        animation: pulse 12s ease-in-out infinite;
    }
    .header-banner::after {
        content: "";
        position: absolute;
        bottom: -40%;
        left: -10%;
        width: 40%;
        height: 150%;
        background: radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 65%);
        pointer-events: none;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
        50% { transform: scale(1.15) rotate(5deg); opacity: 0.4; }
    }

    .header-title {
        font-weight: 800;
        letter-spacing: -0.02em;
        margin-bottom: 2px;
        position: relative;
        z-index: 1;
        text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        font-size: 1.5rem;
    }
    .header-subtitle {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.6);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        position: relative;
        z-index: 1;
        margin-top: 2px;
    }

    .user-info {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(8px);
        padding: 8px 16px;
        border-radius: var(--radius-lg);
        font-size: 0.85rem;
        z-index: 2;
    }

    .card {
        border: 1px solid var(--border-light);
        border-radius: var(--radius-lg);
        margin-bottom: 20px;
        box-shadow: var(--shadow-md);
        background: var(--card-bg);
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
    }

    .card:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-2px);
        border-color: rgba(29,78,216,0.15);
    }

    .form-label-custom {
        font-weight: 700;
        color: var(--primary);
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        display: block;
    }

    .form-control, .form-select {
        border-radius: var(--radius-md);
        border: 2px solid var(--border-color);
        padding: 12px 16px;
        font-weight: 500;
        color: var(--text-primary);
        transition: all 0.2s;
        background: white;
    }

    .form-control:focus, .form-select:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        outline: none;
    }

    .nav-pills-modern {
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(10px);
        padding: 6px;
        border-radius: var(--radius-xl);
        margin-bottom: 24px;
        box-shadow: 0 4px 20px rgba(29,78,216,0.15), 0 1px 4px rgba(0,0,0,0.08);
        display: flex;
        gap: 6px;
        border: 1px solid rgba(29,78,216,0.1);
    }

    .nav-pills-modern .nav-link {
        border-radius: var(--radius-lg);
        color: var(--text-secondary);
        font-weight: 700;
        border: none;
        padding: 11px 20px;
        transition: all 0.25s cubic-bezier(.4,0,.2,1);
        font-size: 0.875rem;
        flex: 1;
        text-align: center;
        white-space: nowrap;
        letter-spacing: 0.01em;
    }

    .nav-pills-modern .nav-link.active {
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        box-shadow: 0 4px 14px rgba(29,78,216,0.4);
    }

    .nav-pills-modern .nav-link:hover:not(.active) {
        background: var(--primary-light);
        color: var(--primary-dark);
    }

    .btn-scan {
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        color: white;
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        border: none;
        padding: 12px 20px;
        transition: all 0.3s;
        font-weight: 600;
    }

    .btn-scan:hover {
        transform: translateX(-2px);
        box-shadow: var(--shadow-md);
    }

    .btn-submit {
        border: none;
        border-radius: var(--radius-xl);
        padding: 18px;
        font-weight: 800;
        font-size: 1.1rem;
        width: 100%;
        color: white;
        margin-top: 20px;
        box-shadow: var(--shadow-lg);
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
    }

    .btn-submit::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }

    .btn-submit:hover::before {
        width: 300px;
        height: 300px;
    }

    .btn-submit:active {
        transform: scale(0.98);
    }

    .btn-area {
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    }

    .btn-dcc {
        background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
    }

    .type-selector-container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .type-selector input[type="radio"] {
        display: none;
    }

    .type-selector label {
        display: inline-block;
        padding: 12px 28px;
        border: 2px solid var(--border-color);
        color: var(--text-secondary);
        background: white;
        border-radius: var(--radius-xl);
        cursor: pointer;
        font-weight: 700;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .type-selector label:hover {
        border-color: var(--primary);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }

    .type-selector input[type="radio"]:checked + label {
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        border-color: var(--primary);
        box-shadow: var(--shadow-md);
    }

    .readonly-list {
        background-color: var(--bg-body) !important;
        color: var(--text-secondary);
    }

    .text-danger-custom {
        color: var(--danger) !important;
    }

    #reader {
        width: 100%;
        border-radius: var(--radius-lg);
        display: none;
        margin-bottom: 20px;
        border: 3px solid var(--primary);
        overflow: hidden;
        box-shadow: var(--shadow-lg);
    }

    .loader-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.95);
        z-index: 9999;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
    }

    .fade-success {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
        color: white;
        padding: 32px 60px;
        border-radius: var(--radius-xl);
        font-size: 1.3rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: successPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes successPop {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.05);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }

    #wiImageContainer {
        background: var(--bg-body);
        padding: 20px;
        border-radius: var(--radius-lg);
        border: 2px solid var(--border-color);
    }

    #wiImageContainer img {
        transition: transform 0.3s ease;
        max-height: 400px;
        object-fit: contain;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
    }

    #wiImageContainer img:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-lg);
    }

    .table-wrapper {
        overflow-x: auto;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        margin-bottom: 20px;
        background: white;
        -webkit-overflow-scrolling: touch;
    }

    .table {
        margin-bottom: 0;
        min-width: 800px;
        font-size: 0.9rem;
    }

    .table thead th {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.5px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        border: none;
        padding: 16px 12px;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .table tbody tr {
        transition: background 0.2s;
    }

    .table tbody tr:hover {
        background: var(--bg-body);
    }

    .table tbody td {
        vertical-align: middle;
        font-weight: 500;
        padding: 14px 12px;
        border-bottom: 1px solid var(--border-color);
    }

    .badge-pmwi {
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        color: white;
        padding: 6px 14px;
        border-radius: var(--radius-lg);
        font-weight: 700;
        font-size: 0.75rem;
        letter-spacing: 0.5px;
    }

    .badge-checklist {
        background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
        color: white;
        padding: 6px 14px;
        border-radius: var(--radius-lg);
        font-weight: 700;
        font-size: 0.75rem;
        letter-spacing: 0.5px;
    }

    .filter-section {
        background: white;
        padding: 20px;
        border-radius: var(--radius-lg);
        margin-bottom: 20px;
        box-shadow: var(--shadow-md);
    }

    .filter-dropdown {
        max-height: 250px;
        overflow-y: auto;
        padding: 12px;
        border: 2px solid var(--border-color);
        border-radius: var(--radius-md);
        background: white;
        margin-top: 8px;
        box-shadow: var(--shadow-sm);
    }

    .filter-checkbox {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: var(--radius-sm);
        transition: background 0.2s;
    }

    .filter-checkbox:hover {
        background: var(--bg-body);
    }

    .filter-checkbox input {
        margin-right: 10px;
        width: 18px;
        height: 18px;
        cursor: pointer;
    }

    .filter-checkbox label {
        font-weight: 500;
        cursor: pointer;
        margin: 0;
        flex: 1;
    }

    .chart-container {
        position: relative;
        min-height: unset;
        height: auto;
        margin-bottom: 16px;
        padding: 18px 18px 12px;
        background: white;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        border: 1px solid var(--border-light);
        transition: box-shadow 0.2s, transform 0.2s;
        overflow: hidden;
    }
    .chart-container:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-2px);
    }

    .chart-title {
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 4px;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--border-light);
        letter-spacing: -0.01em;
    }

        /* ── Insight Pills ── */
        .chart-insight-bar {
          font-size: .72rem;
          background: linear-gradient(135deg,#f8faff,#f0f4ff);
          border-radius: 8px;
          padding: 7px 12px;
          margin-bottom: 9px;
          color: #475569;
          border-left: 3px solid #1d4ed8;
          line-height: 1.6;
        }
        .insight-pill {
          display: inline-block;
          padding: 1px 9px;
          border-radius: 999px;
          font-weight: 700;
          font-size: .65rem;
          margin-right: 4px;
        }
        .insight-pill.red    { background:#fee2e2; color:#dc2626; }
        .insight-pill.green  { background:#d1fae5; color:#065f46; }
        .insight-pill.blue   { background:#dbeafe; color:#1d4ed8; }
        .insight-pill.purple { background:#ede9fe; color:#6d28d9; }
        .insight-pill.orange { background:#ffedd5; color:#c2410c; }
        .insight-pill.gray   { background:#f1f5f9; color:#64748b; }

        /* ── Heatmap ── */
        .heatmap-table { border-collapse: collapse; width: 100%; font-size:.72rem; }
        .heatmap-table th { background:#1d4ed8; color:#fff; padding:5px 8px; text-align:center;
          white-space:nowrap; position:sticky; top:0; font-size:.68rem; }
        .heatmap-table td { padding:5px 8px; text-align:center; border:1px solid #e2e8f0;
          min-width:70px; font-size:.70rem; font-weight:600; transition:all .2s; }
        .heatmap-table td:first-child { text-align:left; font-weight:700;
          background:#f8fafc; color:#1e293b; min-width:140px; white-space:nowrap; }
        .heatmap-table tr:hover td { filter:brightness(.95); }

        /* ── Presentation KPI Banner ── */
        .presentation-kpi {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-bottom: 12px;
        }
        .pkpi-card {
          background: linear-gradient(135deg,#1e3a8a,#1d4ed8);
          border-radius: 10px;
          padding: 12px 14px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .pkpi-card::before {
          content:''; position:absolute; right:-15px; top:-15px;
          width:60px; height:60px; border-radius:50%;
          background:rgba(255,255,255,.08);
        }
        .pkpi-card .pkpi-val { font-size:1.6rem; font-weight:800; line-height:1; }
        .pkpi-card .pkpi-lbl { font-size:.68rem; opacity:.8; margin-top:3px; }
        .pkpi-card .pkpi-trend { font-size:.72rem; margin-top:5px; font-weight:600; }
        .pkpi-card.good { background:linear-gradient(135deg,#065f46,#059669); }
        .pkpi-card.warn { background:linear-gradient(135deg,#92400e,#d97706); }
        .pkpi-card.bad  { background:linear-gradient(135deg,#7f1d1d,#dc2626); }

    .chart-subtitle {
        font-size: 0.75rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
        line-height: 1.4;
        font-style: italic;
    }

    .report-subtabs {
        display: flex;
        gap: 12px;
        margin-bottom: 24px;
        flex-wrap: wrap;
    }

    .report-subtabs .btn {
        border-radius: var(--radius-xl);
        padding: 12px 28px;
        font-weight: 700;
        transition: all 0.3s;
        border: 2px solid transparent;
    }

    .report-subtabs .btn-primary {
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        border-color: var(--primary);
    }

    .report-subtabs .btn-outline-warning {
        color: var(--warning);
        border-color: var(--warning);
    }

    .report-subtabs .btn-outline-warning.active,
    .report-subtabs .btn-warning {
        background: linear-gradient(135deg, var(--warning) 0%, #d97706 100%);
        color: white;
    }

    .report-subtabs .btn-outline-info {
        color: var(--accent);
        border-color: var(--accent);
    }

    .report-subtabs .btn-outline-info.active,
    .report-subtabs .btn-info {
        background: linear-gradient(135deg, var(--accent) 0%, #0284c7 100%);
        color: white;
    }

    .progress {
        height: 24px;
        border-radius: var(--radius-lg);
        background: var(--bg-body);
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
        overflow: hidden;
    }

    .progress-bar {
        border-radius: var(--radius-lg);
        transition: width 0.6s ease;
        font-weight: 700;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input-group-text {
        border-radius: var(--radius-md) 0 0 var(--radius-md);
        background: var(--bg-body);
        border: 2px solid var(--border-color);
        border-right: none;
        color: var(--primary);
        font-weight: 700;
    }

    .input-group .form-control {
        border-left: none;
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
    }

    @media (max-width: 768px) {
        .login-card {
            padding: 40px 30px;
        }

        .header-banner {
            padding: 24px 16px;
        }

        .header-title {
            font-size: 1.3rem;
        }

        .user-info {
            position: static;
            margin-top: 10px;
            display: inline-block;
        }

        .nav-pills-modern {
            flex-direction: column;
            gap: 8px;
        }

        .nav-pills-modern .nav-link {
            padding: 14px 16px;
        }

        .filter-section .row > div {
            margin-bottom: 12px;
        }

        .report-subtabs {
            flex-direction: column;
        }

        .report-subtabs .btn {
            width: 100%;
        }

        .chart-container {
            height: 300px;
            padding: 16px;
        }

        .table {
            font-size: 0.85rem;
        }

        .table thead th,
        .table tbody td {
            padding: 10px 8px;
        }
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg-body);
        border-radius: var(--radius-sm);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: var(--radius-sm);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-dark);
    }

    .container {
        max-width: 1200px;
        padding: 0 20px;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
        margin-bottom: 28px;
    }

    .stat-card {
        background: white;
        padding: 22px 20px 18px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        border-left: 4px solid var(--primary);
        transition: all 0.25s cubic-bezier(.4,0,.2,1);
        position: relative;
        overflow: hidden;
    }
    .stat-card::after {
        content: '';
        position: absolute;
        top: 0; right: 0;
        width: 80px; height: 80px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(29,78,216,0.06) 0%, transparent 70%);
        transform: translate(20px, -20px);
        pointer-events: none;
    }

    .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }

    .stat-icon {
        width: 44px;
        height: 44px;
        border-radius: var(--radius-md);
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        margin-bottom: 14px;
        box-shadow: 0 4px 12px rgba(29,78,216,0.3);
    }

    .stat-value {
        font-size: 2.1rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 2px;
        letter-spacing: -0.03em;
        line-height: 1;
    }

    .stat-label {
        font-size: 0.8rem;
        color: var(--text-secondary);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-top: 4px;
    }

    .stat-trend {
        font-size: 0.78rem;
        margin-top: 10px;
        padding-top: 8px;
        border-top: 1px solid var(--border-light);
        color: var(--text-muted);
    }

    .trend-up   { color: var(--success); font-weight: 700; }
    .trend-down { color: var(--danger);  font-weight: 700; }

    /* Insights Panel */
    .insights-panel {
        background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        padding: 20px;
        border-radius: var(--radius-lg);
        border-left: 5px solid var(--warning);
        margin-bottom: 30px;
        box-shadow: var(--shadow-md);
    }

    .insights-panel h6 {
        color: #92400e;
        font-weight: 800;
        margin-bottom: 15px;
    }

    .insights-panel ul {
        margin: 0;
        padding-left: 20px;
    }

    .insights-panel li {
        margin-bottom: 8px;
        color: #78350f;
        font-weight: 500;
        line-height: 1.6;
    }

    /* Comparison Section Styling */
    .comparison-section {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        padding: 24px;
        border-radius: var(--radius-lg);
        margin-bottom: 30px;
        border-left: 5px solid var(--accent);
        box-shadow: var(--shadow-md);
    }

    .comparison-section h6 {
        color: var(--accent);
        font-weight: 800;
        margin-bottom: 20px;
        font-size: 1.1rem;
    }
  
/* ===== CHART LAYOUT FIX ===== */
.chart-container { display: flex; flex-direction: column; }
.chart-canvas-wrap { position: relative; width: 100%; height: 220px; flex-shrink: 0; margin-top: 8px; }
.chart-container canvas { position: absolute; top: 0; left: 0; width: 100% !important; height: 100% !important; }
#completionChart { max-height: 200px !important; }
@media (max-width: 768px) { .chart-canvas-wrap { height: 190px; } }
/* Hide col wrapper entirely when chart has no data (eliminates empty space) */
.col-chart-hidden { display: none !important; }
/* Row with all cols hidden: collapse margin too */
.row:not(:has(>[class*="col-"]:not([style*="display: none"]):not(.col-chart-hidden))) { margin: 0 !important; }



/* ===== Report Subtabs (clearer colors) ===== */
.report-subtabs { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:18px; }
.report-subtabs .btn { border-radius: 999px; padding: 10px 18px; font-weight: 700; border-width: 2px; }
.btn-report-checked { border-color:#16a34a; color:#16a34a; background:#ffffff; }
.btn-report-waiting { border-color:#f97316; color:#f97316; background:#ffffff; }
.btn-report-summary { border-color:#7c3aed; color:#7c3aed; background:#ffffff; }
.btn-report-area    { border-color:#0891b2; color:#0891b2; background:#ffffff; }
.btn-report-area.active { background:#0891b2; color:#fff; }
.btn-report-checked.active { background:#16a34a; color:#fff; }
.btn-report-waiting.active { background:#f97316; color:#fff; }
.btn-report-summary.active { background:#7c3aed; color:#fff; }

/* ===== Report Filters ===== */
.report-filters { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-bottom:16px; }
.report-filters .filter-item { display:flex; gap:8px; align-items:center; }
.report-filters label { font-weight:700; color:#1f2937; }
.report-filters select { min-width: 220px; border-radius: 12px; }

/* ===== Waiting table progress (prevent overflow on narrow screens) ===== */
td.progress-cell { min-width: 170px; }
td.progress-cell .progress { height: 20px; border-radius: 999px; overflow:hidden; }
td.progress-cell .progress-bar { font-size: 12px; font-weight: 800; white-space: nowrap; }
@media (max-width: 576px) {
  td.progress-cell { min-width: 140px; }
  td.progress-cell .progress-bar { font-size: 11px; }
}


/* ===== Dashboard Mode Segmented Toggle ===== */
.mode-toggle { display:flex; gap:0; border:2px solid #c7d2fe; border-radius: 999px; overflow:hidden; width: fit-content; background:#fff; }
.mode-toggle .mode-btn { padding: 10px 16px; font-weight: 800; border:0; background:transparent; color:#1f2937; cursor:pointer; }
.mode-toggle .mode-btn + .mode-btn { border-left: 2px solid #c7d2fe; }
.mode-toggle .mode-btn.active { background:#1d4ed8; color:#fff; }
@media (max-width: 576px){
  .mode-toggle { width: 100%; }
  .mode-toggle .mode-btn { flex:1; text-align:center; padding: 10px 10px; }
}


/* ===== Chart captions ===== */
.chart-caption{ margin-top:4px; font-size:11px; color:var(--text-muted); line-height:1.3; padding:4px 8px; background:var(--border-light); border-radius:5px; border-left:3px solid var(--border-color); }

/* ===== Chart Info Box — what this chart shows ===== */
.chart-info-box {
  background: linear-gradient(135deg, #f8faff 0%, #eef2ff 100%);
  border: 1px solid #c7d2fe;
  border-left: 4px solid var(--primary);
  border-radius: 8px;
  padding: 7px 12px;
  margin-bottom: 8px;
  font-size: 11.5px;
  color: #3730a3;
  line-height: 1.4;
}
.chart-info-box strong { color: var(--primary-dark); display: block; margin-bottom: 3px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; }
.chart-info-box .metric-tag {
  display: inline-block;
  background: var(--primary);
  color: white;
  border-radius: 4px;
  padding: 1px 7px;
  font-size: 10.5px;
  font-weight: 700;
  margin: 2px 2px 0 0;
}
.chart-info-box .metric-tag.green { background: var(--success); }
.chart-info-box .metric-tag.orange { background: var(--warning); }
.chart-info-box .metric-tag.red { background: var(--danger); }



/* ===== Advanced charts toggle ===== */
.adv-toggle-wrap{ display:flex; justify-content:center; margin: 10px 0 22px; }
.btn-adv-toggle{ border-radius:999px; padding:10px 18px; font-weight:800; border:2px solid #1d4ed8; background:#fff; color:#1d4ed8; }
.btn-adv-toggle:hover{ background:#1d4ed8; color:#fff; }


/* Hide Dashboard Mode toggle (not used) */
#dashboardModeToggle, .dashboard-mode-toggle { display:none !important; }

/* ===== Production layout: simplify ===== */
#dashboardModeToggle, .dashboard-mode-toggle, .dashboard-mode-label { display:none !important; }
/* NOTE: comparisonChartsSection display is now controlled by JS only */
/* Hide extra/legacy filter headers inside Records Checked */
.records-filter-label, .filter-label, .records-checked-filters h6 { display:none !important; }


/* Hide legacy dashboard mode toggle */
#dashboardModeToggle,.dashboard-mode-toggle{display:none!important;}
</style>
</head>
<body>
  <!-- LOGIN PAGE -->
  <div id="loginPage" class="login-container">
    <div class="login-card">
      <div class="login-logo">
        <i class="bi bi-shield-check"></i>
        <h2>SCD Inspection System</h2>
        <p>Document Control Login</p>
      </div>
      <form class="login-form" onsubmit="handleLogin(event)">
        <div class="form-group">
          <label for="loginUser">
            <i class="bi bi-person-badge me-1"></i>รหัสพนักงาน (User ID)
          </label>
          <div class="input-group">
            <input type="text" id="loginUser" class="form-control" placeholder="เช่น 058067" required>
            <button type="button" class="btn btn-outline-primary" onclick="startScan('loginUser')" title="Scan Barcode" aria-label="Scan Barcode">
              <i class="bi bi-upc-scan"></i>
            </button>
          </div>
        </div>
        <div class="form-group">
          <label for="loginName">
            <i class="bi bi-person me-1"></i>ชื่อ-นามสกุล (Display Name)
          </label>
          <input type="text" id="loginName" placeholder="เช่น เอนก สุขใจ" required>
        </div>
        <button type="submit" class="btn-login">
          <i class="bi bi-box-arrow-in-right me-2"></i>เข้าสู่ระบบ
        </button>
      </form>
    </div>
  </div>

  <!-- MAIN APPLICATION -->
  <div id="mainApp" class="main-wrapper">
    <div class="header-banner">
      <h3 class="header-title">
          <i class="bi bi-folder-check me-2"></i>Document Control - SCD
      </h3>
      <div class="header-subtitle">Standard Control and Development · Inspection Management System</div>
      <div class="user-info">
        <i class="bi bi-person-circle me-1"></i>
        <span id="displayUserInfo"></span>
      </div>
    </div>

    <div class="container">
      <div id="reader"></div>

      <ul class="nav nav-pills nav-justified nav-pills-modern" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="tab-area" data-bs-toggle="pill" data-bs-target="#content-area" type="button">
              <i class="bi bi-geo-alt me-1"></i>Area Inspection
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="tab-dcc" data-bs-toggle="pill" data-bs-target="#content-dcc" type="button">
              <i class="bi bi-clipboard-check me-1"></i>DCC Record
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="tab-report" data-bs-toggle="pill" data-bs-target="#content-report" type="button">
              <i class="bi bi-bar-chart me-1"></i>Data Report
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        
        <!-- AREA INSPECTION TAB -->
        <div class="tab-pane fade show active" id="content-area">
          <form id="formArea" autocomplete="off">
            <div class="card p-3"><div class="card-body">

              <div class="mb-3">
                <label class="form-label-custom"><i class="bi bi-calendar-event me-1"></i> Date</label>
                <input type="date" id="date" class="form-control">
              </div>

              <label class="form-label-custom"><i class="bi bi-geo me-1"></i> Area</label>
              <select id="area" class="form-select mb-3"><option value="">-- เลือก Area --</option></select>

              <label class="form-label-custom"><i class="bi bi-pin-map me-1"></i> Location</label>
              <div class="input-group mb-3">
                <input type="text" id="location" class="form-control" placeholder="ระบุตำแหน่ง...">
                <button type="button" class="btn btn-scan" onclick="startScan('location')"><i class="bi bi-qr-code-scan"></i></button>
              </div>

              <h6 class="fw-bold text-primary mb-3 mt-2"><i class="bi bi-box-seam me-2"></i>Product Details</h6>
              <div class="mb-4">
                <label class="form-label-custom small">Article 1</label>
                <div class="input-group mb-2">
                  <input type="text" id="art1" class="form-control" placeholder="Article หรือ Barcode...">
                  <button type="button" class="btn btn-scan" onclick="startScan('art1')"><i class="bi bi-upc-scan"></i></button>
                </div>
                <input type="text" id="desc1" class="form-control mb-2 readonly-list" readonly placeholder="Description shows here...">
                <input type="number" id="qty1" class="form-control" placeholder="Quantity">
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Article 2</label>
                <div class="input-group mb-2">
                  <input type="text" id="art2" class="form-control" placeholder="Article หรือ Barcode...">
                  <button type="button" class="btn btn-scan" onclick="startScan('art2')"><i class="bi bi-upc-scan"></i></button>
                </div>
                <input type="text" id="desc2" class="form-control mb-2 readonly-list" readonly placeholder="Description shows here...">
                <input type="number" id="qty2" class="form-control" placeholder="Quantity">
              </div>

              <hr class="text-muted">
              <label class="form-label-custom text-danger-custom mt-3"><i class="bi bi-exclamation-triangle me-1"></i> Problem</label>
              <select id="problem" class="form-select mb-3"><option value="">-- เลือกปัญหาที่พบ --</option></select>

              <label class="form-label-custom"><i class="bi bi-images me-1"></i> Images (Max 4)</label>
              <input type="file" id="imagesArea" class="form-control mb-3" accept="image/*" multiple>

              <label class="form-label-custom"><i class="bi bi-chat-square-text me-1"></i> Remark</label>
              <textarea id="remark" class="form-control mb-3" rows="3" placeholder="หมายเหตุเพิ่มเติม..."></textarea>

              <label class="form-label-custom"><i class="bi bi-person-check me-1"></i> Inspector</label>
              <input type="text" id="inspectorAreaDisplay" class="form-control readonly-list" readonly>

            </div></div>

            <button type="button" class="btn btn-submit btn-area" onclick="handleSaveArea()">
              <i class="bi bi-send-check me-2"></i>SUBMIT AREA
            </button>
          </form>
        </div>
        <!-- DCC RECORD TAB -->
        <div class="tab-pane fade" id="content-dcc">
          <form id="formDCC" autocomplete="off">
            <div class="card p-3"><div class="card-body">
              <div class="mb-4">
                  <label class="form-label-custom"><i class="bi bi-calendar-event me-1"></i> Date</label>
                  <input type="date" id="dccDate" class="form-control">
              </div>
              
              <div class="mb-4">
                <label class="form-label-custom mb-3"><i class="bi bi-list-check me-1"></i> Record Type</label>
                <div class="type-selector type-selector-container" id="typeContainer"></div>
                <input type="hidden" id="dccType">
              </div>

              <div class="mb-3">
                <label class="form-label-custom">Department</label>
                <select id="dccDept" class="form-select" onchange="filterFunc()"><option value="">- เลือก Type ก่อน -</option></select>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Function</label>
                <select id="dccFunc" class="form-select" onchange="filterSubFunc()"><option value="">- เลือก Dept ก่อน -</option></select>
              </div>
              
              <div class="mb-4">
                <label class="form-label-custom">Sub-Function</label>
                <select id="dccSubFunc" class="form-select" onchange="lookupMasterDetails()"><option value="">- เลือก Function ก่อน -</option></select>
                
                <div id="btnViewWIContainer" class="mt-2" style="display:none;">
                    <a id="linkViewWI" href="#" target="_blank" class="btn w-100" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border-radius: 12px; font-weight: bold; padding: 14px;">
                        <i class="bi bi-file-earmark-pdf-fill me-2"></i>เปิดดูคู่มือ/WI (Reference)
                    </a>
                </div>
                
                <div id="wiImageContainer" class="mt-3" style="display:none; text-align: center;">
                </div>
              </div>
              
              <div class="row g-3">
                <div class="col-4">
                  <label class="form-label-custom small">Plan Unit</label>
                  <input type="number" id="dccPlanUnit" class="form-control readonly-list" readonly>
                </div>
                <div class="col-4">
                  <label class="form-label-custom small text-primary">Unit Check</label>
                  <input type="number" id="dccUnitCheck" class="form-control" placeholder="0">
                </div>
                <div class="col-4">
                  <label class="form-label-custom small text-danger-custom">Err. Unit</label>
                  <input type="number" id="dccErrUnit" class="form-control" placeholder="0">
                </div>
              </div>
            </div></div>

            <div class="card p-3" id="pmSection" style="display:none; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);">
              <div class="card-body">
                <label class="form-label-custom mb-3"><i class="bi bi-clipboard-list me-1"></i> Checklist Details</label>
                
                <div class="input-group mb-2" id="boxL1" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><span class="input-group-text fw-bold">L1</span><input type="text" id="dccList1" class="form-control readonly-list" readonly></div>
                <div class="input-group mb-2" id="boxL2" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><span class="input-group-text fw-bold">L2</span><input type="text" id="dccList2" class="form-control readonly-list" readonly></div>
                <div class="input-group mb-2" id="boxL3" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><span class="input-group-text fw-bold">L3</span><input type="text" id="dccList3" class="form-control readonly-list" readonly></div>
                <div class="input-group mb-2" id="boxL4" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><span class="input-group-text fw-bold">L4</span><input type="text" id="dccList4" class="form-control readonly-list" readonly></div>
                <div class="input-group mb-2" id="boxL5" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><span class="input-group-text fw-bold">L5</span><input type="text" id="dccList5" class="form-control readonly-list" readonly></div>
                
              </div>
            </div>
            
            <div class="card p-3"><div class="card-body">
              <label class="form-label-custom"><i class="bi bi-chat-square-text me-1"></i> Remark</label>
              <textarea id="dccRemark" class="form-control mb-3" rows="3" placeholder="บันทึกเพิ่มเติม..."></textarea>
              
              <label class="form-label-custom"><i class="bi bi-images me-1"></i> Error Images (Max 3)</label>
              <input type="file" id="imagesDCC" class="form-control mb-3" accept="image/*" multiple>
              
              <label class="form-label-custom"><i class="bi bi-person-check me-1"></i> Inspector</label>
              <input type="text" id="dccInspectorDisplay" class="form-control readonly-list" readonly>
            </div></div>
            <button type="button" class="btn btn-submit btn-dcc" onclick="handleSaveDCC()">
                <i class="bi bi-check-circle-fill me-2"></i>SUBMIT RECORD
            </button>
          </form>
        </div>

        <!-- DATA REPORT TAB -->
        <div class="tab-pane fade" id="content-report">
          <div class="card p-3">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h5 class="fw-bold text-primary mb-0">
                  <i class="bi bi-clipboard-data me-2"></i>Data Report Summary
                </h5>
                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-sm btn-success" onclick="exportToExcel()" title="Export Excel">
                    <i class="bi bi-file-earmark-excel me-1"></i>Excel
                  </button>
                  <button type="button" class="btn btn-sm btn-danger" onclick="exportToPDF()" title="Print / PDF">
                    <i class="bi bi-file-earmark-pdf me-1"></i>PDF
                  </button>
                </div>
              </div>
              
              



<div class="report-subtabs">
  <button type="button" class="btn btn-report-checked active" id="btnViewChecked" onclick="showReportTab('checked')">
    <i class="bi bi-check-circle me-1"></i>Checked
  </button>
  <button type="button" class="btn btn-report-waiting" id="btnViewWaiting" onclick="showReportTab('waiting')">
    <i class="bi bi-clock-history me-1"></i>Waiting to Check
  </button>
  <button type="button" class="btn btn-report-summary" id="btnViewSummary" onclick="showReportTab('summary')">
    <i class="bi bi-bar-chart me-1"></i>Summary
  </button>
  <button type="button" class="btn btn-report-area" id="btnViewArea" onclick="showReportTab('area')">
    <i class="bi bi-map me-1"></i>Area Trend
  </button>
</div>

<div class="report-filters">
  <div class="filter-item">
    <label for="reportTypeFilter"><i class="bi bi-funnel me-1"></i>Type</label>
    <select id="reportTypeFilter" class="form-select" onchange="onReportFilterChanged()">
      <option value="Checklist">Checklist</option>
      <option value="PMWI">PMWI</option>
      <option value="ALL">All (Combined)</option>
    </select>
  </div>
  <div class="filter-item">
    <label for="reportDeptFilter"><i class="bi bi-building me-1"></i>Department</label>
    <select id="reportDeptFilter" class="form-select" onchange="onReportFilterChanged()">
      <option value="ALL">All</option>
    </select>
  </div>
</div>


              <!-- CHECKED SECTION -->
              <div id="reportChecked" style="display:block;">
                <h6 class="fw-bold text-success mb-3">
                  <i class="bi bi-check-all me-2"></i>Records Checked
                </h6>
                
                <div class="filter-section">
                  <div class="row g-3">
                    <div class="col-md-3">
                      <label class="form-label-custom small">Filter by Month:</label>
                      <select id="filterMonth" class="form-select" onchange="applyFilters()">
                        <option value="">-- All Months --</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <label class="form-label-custom small">Filter by Date:</label>
                      <button type="button" class="btn btn-outline-primary w-100" onclick="toggleDateFilter()">
                        <i class="bi bi-calendar3 me-1"></i>Select Dates
                      </button>
                      <div id="dateFilterDropdown" class="filter-dropdown" style="display:none;">
                        <div id="dateCheckboxes"></div>
                      </div>
                    </div>
<div class="col-md-3">
                      <label class="form-label-custom small">Filter by Inspector:</label>
                      <select id="filterInspector" class="form-select" onchange="applyFilters()">
                        <option value="">-- All Inspectors --</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div class="table-wrapper">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Department</th>
                        <th>Function</th>
                        <th>Sub-Function</th>
                        <th>Unit Check</th>
                        <th>Inspector</th>
                      </tr>
                    </thead>
                    <tbody id="checkedTableBody">
                      <tr><td colspan="7" class="text-center py-4">Click Refresh Data</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- WAITING SECTION -->
              <div id="reportWaiting" style="display:none;">
                <h6 class="fw-bold text-warning mb-3">
                  <i class="bi bi-hourglass-split me-2"></i>Waiting to Check (Current Period)
                </h6>
                
                <!-- Waiting Summary Banner -->
              <div id="waitingSummaryBanner" style="display:none; padding:10px 16px; background:linear-gradient(135deg,#fffbeb,#fef3c7); border-radius:10px; border-left:4px solid #f59e0b; margin-bottom:12px; flex-wrap:wrap; gap:8px; align-items:center; font-size:0.875rem;">
              </div>

              <div class="table-wrapper">
                  <table class="table table-hover">
                    <thead style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                      <tr>
                        <th>Type</th>
                        <th>Department</th>
                        <th>Function</th>
                        <th>Sub-Function</th>
                        <th>Target</th>
                        <th>Checked</th>
                        <th>Remaining</th>
                        <th>Status</th>
                        <th>Progress</th>
                      </tr>
                    </thead>
                    <tbody id="waitingTableBody">
                      <tr><td colspan="8" class="text-center py-4">Click Refresh Data</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <!-- AREA TREND SECTION -->
              <div id="reportAreaTrend" style="display:none;">

                <!-- Header + Controls -->
                <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <h6 class="fw-bold mb-0" style="color:#0891b2">
                    <i class="bi bi-map me-2"></i>Area Inspection — Quality Analysis Dashboard
                  </h6>
                  <button class="btn btn-sm btn-outline-secondary" onclick="exportAreaTrendCSV()">
                    <i class="bi bi-file-earmark-excel me-1"></i>Export CSV
                  </button>
                </div>

                <!-- Filters -->
                <div class="filter-section mb-4">
                  <div class="row g-2 align-items-end">
                    <div class="col-6 col-md-2">
                      <label class="form-label-custom small"><i class="bi bi-calendar-check me-1"></i>Primary Month</label>
                      <select id="areaTrendPrimaryMonth" class="form-select form-select-sm" onchange="renderAreaTrend()">
                        <option value="ALL">ทุกเดือน</option>
                      </select>
                    </div>
                    <div class="col-6 col-md-2">
                      <label class="form-label-custom small"><i class="bi bi-calendar2-range me-1"></i>Comparison Month</label>
                      <select id="areaTrendCompMonth" class="form-select form-select-sm" onchange="renderAreaTrend()">
                        <option value="NONE">— ไม่เปรียบเทียบ —</option>
                      </select>
                    </div>
                    <div class="col-6 col-md-2">
                      <label class="form-label-custom small"><i class="bi bi-geo me-1"></i>Area</label>
                      <select id="areaTrendAreaFilter" class="form-select form-select-sm" onchange="renderAreaTrend()">
                        <option value="ALL">ทั้งหมด</option>
                      </select>
                    </div>
                    <div class="col-6 col-md-2">
                      <label class="form-label-custom small"><i class="bi bi-pin-map me-1"></i>Location</label>
                      <select id="areaTrendLocFilter" class="form-select form-select-sm" onchange="renderAreaTrend()">
                        <option value="ALL">ทั้งหมด</option>
                      </select>
                    </div>
                    <div class="col-6 col-md-2">
                      <label class="form-label-custom small"><i class="bi bi-bug me-1"></i>Problem</label>
                      <select id="areaTrendTypeFilter" class="form-select form-select-sm" onchange="renderAreaTrend()">
                        <option value="ALL">ทั้งหมด</option>
                      </select>
                    </div>
                    <div class="col-6 col-md-2">
                      <label class="form-label-custom small"><i class="bi bi-calendar3 me-1"></i>Trend Range</label>
                      <select id="areaTrendMonthRange" class="form-select form-select-sm" onchange="renderAreaTrend()">
                        <option value="3">3 เดือน</option>
                        <option value="6">6 เดือน</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Comparison Banner (แสดงเมื่อเลือก Comparison Month) -->
                <div id="areaCompBanner" style="display:none" class="mb-3 p-3 rounded-3 d-flex align-items-center gap-3 flex-wrap"
                     style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #93c5fd">
                  <span style="font-weight:700;color:#1d4ed8"><i class="bi bi-bar-chart-steps me-2"></i>เปรียบเทียบ:</span>
                  <span id="areaCompLabel" style="font-size:0.9rem;color:#374151"></span>
                </div>

                <!-- KPI Bar -->
                <div id="areaTrendKpiBar" class="row g-3 mb-4"></div>

                <!-- Row 1: Pareto Area + Trend Line -->
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <div class="chart-container">
                      <div class="chart-title"><i class="bi bi-bar-chart-steps me-2"></i>Pareto — Top Areas (Issues Count)</div>
                      <div class="chart-info-box">
                        <strong>📊 วิเคราะห์</strong> Area ที่มีปัญหาสะสมมากที่สุด — 80% ของปัญหามักมาจาก 20% ของ Area
                        <br><span class="metric-tag red">แดง = ต้องแก้ก่อน</span>
                        <span class="metric-tag orange">เส้น % = Cumulative</span>
                      </div>
                      <div class="chart-canvas-wrap"><canvas id="areaParetoChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="chart-container">
                      <div class="chart-title"><i class="bi bi-graph-up me-2"></i>Trend — Issues per Area (Monthly)</div>
                      <div class="chart-info-box">
                        <strong>📊 วิเคราะห์</strong> แนวโน้มปัญหาแต่ละ Area ย้อนหลัง — เส้นลง = ดีขึ้น ✅
                        <br><span class="metric-tag orange">เส้นขึ้น = ต้องหา root cause</span>
                      </div>
                      <div class="chart-canvas-wrap"><canvas id="areaTrendMonthlyChart"></canvas></div>
                    </div>
                  </div>
                </div>

                <!-- Row 2: Pareto Problem + Heatmap -->
                <div class="row g-3 mb-3">
                  <div class="col-md-5">
                    <div class="chart-container">
                      <div class="chart-title"><i class="bi bi-pie-chart me-2"></i>Pareto — Top Problems (Frequency)</div>
                      <div class="chart-info-box">
                        <strong>📊 วิเคราะห์</strong> Problem type ที่พบบ่อยที่สุด — ช่วยกำหนด priority การแก้ไข
                        <br><span class="metric-tag">วงใหญ่ = พบบ่อย = แก้ก่อน</span>
                      </div>
                      <div class="chart-canvas-wrap"><canvas id="areaProblemParetoChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="chart-container">
                      <div class="chart-title"><i class="bi bi-grid-3x3 me-2"></i>Heatmap — Area × Problem Matrix</div>
                      <div class="chart-info-box">
                        <strong>📊 วิเคราะห์</strong> ช่องสีเข้ม = Area นั้นมี Problem นั้นบ่อย — ใช้วางแผน patrol
                        <br><span class="metric-tag red">เข้ม = Critical Zone</span>
                        <span class="metric-tag">อ่อน = ปกติ</span>
                      </div>
                      <div id="areaHeatmapContainer" style="overflow-x:auto;margin-top:8px;max-height:220px;overflow-y:auto;"></div>
                    </div>
                  </div>
                </div>

                <!-- Row 3: Quantity Bar + Monthly Total -->
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <div class="chart-container">
                      <div class="chart-title"><i class="bi bi-boxes me-2"></i>Quantity by Area</div>
                      <div class="chart-info-box">
                        <strong>📊 วิเคราะห์</strong> จำนวน Unit ที่ผิดพลาดต่อ Area — ต่างจาก Case count
                        <br><span class="metric-tag orange">Unit สูง = impact มาก แม้ case น้อย</span>
                      </div>
                      <div class="chart-canvas-wrap"><canvas id="areaErrorUnitsChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="chart-container">
                      <div class="chart-title"><i class="bi bi-activity me-2"></i>Monthly Total Issues + Quantity</div>
                      <div class="chart-info-box">
                        <strong>📊 วิเคราะห์</strong> ภาพรวมรายเดือน: Cases vs Quantity — เส้นทั้งสองลด = Improvement ชัดเจน
                      </div>
                      <div class="chart-canvas-wrap"><canvas id="areaMonthlyDualChart"></canvas></div>
                    </div>
                  </div>
                </div>

                <!-- Drill-down Detail Table with Photos -->
                <div class="card p-3 mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                      <h6 class="fw-bold mb-0" style="color:#1d4ed8">
                        <i class="bi bi-table me-2"></i>Issue Detail Table
                        <span class="text-muted fw-normal" style="font-size:0.8rem"> — คลิก Problem เพื่อดูรูปประกอบ</span>
                      </h6>
                      <span id="areaDetailCount" class="badge bg-primary" style="font-size:0.78rem"></span>
                    </div>
                    <div class="table-wrapper">
                      <table class="table table-sm table-hover" id="areaDetailTable">
                        <thead style="background:linear-gradient(135deg,#1d4ed8,#1e40af);color:#fff;position:sticky;top:0">
                          <tr>
                            <th>Date</th>
                            <th>Area</th>
                            <th>Location</th>
                            <th>Problem</th>
                            <th>Qty</th>
                            <th>Photos</th>
                          </tr>
                        </thead>
                        <tbody id="areaDetailBody">
                          <tr><td colspan="6" class="text-center py-3 text-muted">Refresh Data เพื่อโหลดข้อมูล</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Photo Lightbox Modal -->
                <div id="areaPhotoModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999;padding:20px;box-sizing:border-box;" onclick="closeAreaPhotoModal()">
                  <div style="max-width:700px;margin:0 auto;background:#fff;border-radius:12px;padding:20px;max-height:90vh;overflow-y:auto;" onclick="event.stopPropagation()">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h6 class="fw-bold mb-0" id="areaPhotoModalTitle" style="color:#1d4ed8"></h6>
                      <button class="btn btn-sm btn-outline-secondary" onclick="closeAreaPhotoModal()"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div id="areaPhotoModalInfo" class="mb-3 p-2" style="background:#f8faff;border-radius:8px;font-size:0.85rem;"></div>
                    <div id="areaPhotoModalLinks" class="d-flex flex-wrap gap-2"></div>
                  </div>
                </div>

              </div>
              <!-- END AREA TREND SECTION -->

              <!-- SUMMARY SECTION -->
              <div id="reportSummary" style="display:none;">

                <!-- Header -->
                <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <h6 class="fw-bold mb-0" style="color:#0ea5e9">
                    <i class="bi bi-graph-up me-2"></i>Performance Analytics &amp; Insights
                  </h6>
                </div>

                <!-- Month Filters -->
                <div class="filter-section mb-4">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label-custom small"><i class="bi bi-calendar-range me-1"></i>Primary Month</label>
                      <select id="primaryMonthSelect" class="form-select" onchange="updateProfessionalDashboard()">
                        <option value="">-- Select Month --</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label-custom small"><i class="bi bi-calendar-check me-1"></i>Compare With (Optional)</label>
                      <select id="compareMonthSelect" class="form-select" onchange="updateProfessionalDashboard()">
                        <option value="">-- No Comparison --</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- KPI Cards -->
                <!-- Primary Month KPI Cards -->
                <div class="mb-1" id="kpiPrimaryLabel" style="font-size:.75rem;font-weight:700;color:#1d4ed8;text-transform:uppercase;letter-spacing:.05em">
                  <i class="bi bi-calendar-check me-1"></i>Primary Month: <span id="lblPrimaryMonth">—</span>
                </div>
                <div class="stats-grid mb-3" id="statsMonth1">
                  <div class="stat-card" style="border-left-color:#ef4444">
                    <div class="stat-icon" style="background:linear-gradient(135deg,#ef4444,#dc2626)"><i class="bi bi-exclamation-triangle"></i></div>
                    <div class="stat-value" id="totalErrorsMonth1">0</div>
                    <div class="stat-label">Total Errors</div>
                    <div class="stat-trend"><span id="errorCompare"></span></div>
                  </div>
                  <div class="stat-card" style="border-left-color:#10b981">
                    <div class="stat-icon" style="background:linear-gradient(135deg,#10b981,#059669)"><i class="bi bi-clipboard-check"></i></div>
                    <div class="stat-value" id="totalUnitsMonth1">0</div>
                    <div class="stat-label">Units Checked</div>
                    <div class="stat-trend"><span id="unitCompare"></span></div>
                  </div>
                  <div class="stat-card" style="border-left-color:#f59e0b">
                    <div class="stat-icon" style="background:linear-gradient(135deg,#f59e0b,#d97706)"><i class="bi bi-percent"></i></div>
                    <div class="stat-value" id="errorRateMonth1">0%</div>
                    <div class="stat-label">Error Rate</div>
                    <div class="stat-trend"><span id="rateCompare"></span></div>
                  </div>
                  <div class="stat-card" style="border-left-color:#0ea5e9">
                    <div class="stat-icon" style="background:linear-gradient(135deg,#0ea5e9,#0284c7)"><i class="bi bi-building"></i></div>
                    <div class="stat-value" id="deptCountMonth1">0</div>
                    <div class="stat-label">Departments</div>
                    <div class="stat-trend"><span id="deptCompare"></span></div>
                  </div>
                </div>

                <!-- Comparison Month KPI Cards (hidden by default) -->
                <div id="statsMonth2Wrap" style="display:none">
                  <div class="mb-1" style="font-size:.75rem;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.05em">
                    <i class="bi bi-calendar2-range me-1"></i>Comparison Month: <span id="lblCompMonth">—</span>
                  </div>
                  <div class="stats-grid mb-3" id="statsMonth2" style="--stat-border:2px solid #ede9fe">
                    <div class="stat-card" style="border-left-color:#7c3aed;outline:2px solid #ede9fe">
                      <div class="stat-icon" style="background:linear-gradient(135deg,#7c3aed,#6d28d9)"><i class="bi bi-exclamation-triangle"></i></div>
                      <div class="stat-value" id="totalErrorsMonth2" style="color:#7c3aed">0</div>
                      <div class="stat-label">Total Errors</div>
                      <div class="stat-trend" id="deltaErrors" style="font-weight:700"></div>
                    </div>
                    <div class="stat-card" style="border-left-color:#7c3aed;outline:2px solid #ede9fe">
                      <div class="stat-icon" style="background:linear-gradient(135deg,#7c3aed,#6d28d9)"><i class="bi bi-clipboard-check"></i></div>
                      <div class="stat-value" id="totalUnitsMonth2" style="color:#7c3aed">0</div>
                      <div class="stat-label">Units Checked</div>
                      <div class="stat-trend" id="deltaUnits" style="font-weight:700"></div>
                    </div>
                    <div class="stat-card" style="border-left-color:#7c3aed;outline:2px solid #ede9fe">
                      <div class="stat-icon" style="background:linear-gradient(135deg,#7c3aed,#6d28d9)"><i class="bi bi-percent"></i></div>
                      <div class="stat-value" id="errorRateMonth2" style="color:#7c3aed">0%</div>
                      <div class="stat-label">Error Rate</div>
                      <div class="stat-trend" id="deltaRate" style="font-weight:700"></div>
                    </div>
                    <div class="stat-card" style="border-left-color:#7c3aed;outline:2px solid #ede9fe">
                      <div class="stat-icon" style="background:linear-gradient(135deg,#7c3aed,#6d28d9)"><i class="bi bi-building"></i></div>
                      <div class="stat-value" id="deptCountMonth2" style="color:#7c3aed">0</div>
                      <div class="stat-label">Departments</div>
                      <div class="stat-trend" id="deltaDept" style="font-weight:700"></div>
                    </div>
                  </div>
                </div>

                <!-- Presentation KPI Banner -->
                <div class="presentation-kpi mb-4" id="presentationKpiBanner">
                  <div class="pkpi-card" id="pkpi1">
                    <div class="pkpi-val" id="pkpi_errRate">—</div>
                    <div class="pkpi-lbl">ERROR RATE %</div>
                    <div class="pkpi-trend" id="pkpi_errTrend"></div>
                  </div>
                  <div class="pkpi-card" id="pkpi2">
                    <div class="pkpi-val" id="pkpi_units">—</div>
                    <div class="pkpi-lbl">UNITS CHECKED</div>
                    <div class="pkpi-trend" id="pkpi_unitsTrend"></div>
                  </div>
                  <div class="pkpi-card" id="pkpi3">
                    <div class="pkpi-val" id="pkpi_errors">—</div>
                    <div class="pkpi-lbl">TOTAL ERRORS</div>
                    <div class="pkpi-trend" id="pkpi_errorsTrend"></div>
                  </div>
                  <div class="pkpi-card" id="pkpi4">
                    <div class="pkpi-val" id="pkpi_depts">—</div>
                    <div class="pkpi-lbl">DEPTS ACTIVE</div>
                    <div class="pkpi-trend" id="pkpi_deptsTrend"></div>
                  </div>
                  <div class="pkpi-card" id="pkpi5">
                    <div class="pkpi-val" id="pkpi_topErr">—</div>
                    <div class="pkpi-lbl">TOP ERROR TYPE</div>
                    <div class="pkpi-trend" id="pkpi_topErrPct" style="font-size:.65rem"></div>
                  </div>
                </div>

                <div id="smartActionsPanel" class="mb-3"></div>
                <div id="chronicIssuesPanel" class="mb-4"></div>

                <!-- ROW 1: Error Rate Trend (full width) -->
                <div class="chart-container mb-3">
                  <div class="chart-title">
                    <i class="bi bi-graph-up-arrow me-2" style="color:#1d4ed8"></i>
                    Error Rate Trend — รายเดือนทั้งหมด + Target 2% Zone
                  </div>
                  <div style="font-size:.72rem;background:#f8faff;border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#475569">
                    📊 <b>วิเคราะห์:</b> แนวโน้ม Error Rate ย้อนหลัง — เส้นสีน้ำเงิน = Actual | เส้นประ = Moving Avg 3 เดือน | พื้นที่แดง = เกิน Target 2%
                    <br>
                    <span style="background:#fee2e2;color:#dc2626;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem">เส้นขึ้น = แย่ลง</span>
                    <span style="background:#d1fae5;color:#065f46;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">เส้นลง = Improvement ✅</span>
                    <span style="background:#dbeafe;color:#1d4ed8;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">ต่ำกว่าเส้น 2% = ปลอดภัย</span>
                  </div>
                  <div class="chart-canvas-wrap" style="height:200px"><canvas id="errorRateTrendProfChart"></canvas></div>
                  <div class="chart-caption" id="cap_errorRateTrendProfChart"></div>
                </div>

                <!-- ROW 2: Dept Performance (left) + Bubble (right) -->
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-trophy me-2" style="color:#f59e0b"></i>
                        Dept Performance — Worst → Best (Error Rate %)
                      </div>
                      <div style="font-size:.72rem;background:#f8faff;border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#475569">
                        📊 <b>วิเคราะห์:</b> Dept ที่มี Error Rate สูงสุด = ต้องแก้ก่อน
                        <br>
                        <span style="background:#fee2e2;color:#dc2626;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem">แดง = Worst (เกิน 5%)</span>
                        <span style="background:#d1fae5;color:#065f46;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">เขียว = Best</span>
                        <span style="background:#dbeafe;color:#1d4ed8;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">เส้น = Target 5%</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:200px"><canvas id="topDepartmentsChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-scatter-chart me-2" style="color:#7c3aed"></i>
                        Error Rate vs Volume (Bubble)
                      </div>
                      <div style="font-size:.72rem;background:#f8faff;border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#475569">
                        📊 <b>วิเคราะห์:</b> ฟอง = Dept | ขนาด = Units Checked | จุดแดง = ตรวจเยอะแต่ Error สูง = ปัญหาจริง
                        <br>
                        <span style="background:#fee2e2;color:#dc2626;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem">มุมขวาบน = Critical</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:200px"><canvas id="deptComparisonChart"></canvas></div>
                    </div>
                  </div>
                </div>

                <!-- ROW 3: Grouped Bar (left) + Completion (right) -->
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-bar-chart-steps me-2" style="color:#0891b2"></i>
                        Error Rate by Dept — Monthly Grouped Bar
                      </div>
                      <div style="font-size:.72rem;background:#f8faff;border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#475569">
                        📊 <b>วิเคราะห์:</b> เปรียบ Dept แต่ละเดือน — bar ลดลง = Improving | สีเข้ม = เดือนล่าสุด
                        <br>
                        <span style="background:#dbeafe;color:#1d4ed8;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem">bar สั้นลง = ดีขึ้น ✅</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:200px"><canvas id="errorTrendChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-check2-circle me-2" style="color:#059669"></i>
                        Completion / Coverage (%)
                      </div>
                      <div style="font-size:.72rem;background:#f8faff;border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#475569">
                        📊 <b>วิเคราะห์:</b> Coverage ต่อ Dept — แต่ละ bar = % ของ Target ที่ตรวจแล้ว
                        <br>
                        <span style="background:#d1fae5;color:#065f46;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem">Checked</span>
                        <span style="background:#fee2e2;color:#dc2626;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">Remaining</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:200px"><canvas id="completionChart"></canvas></div>
                    </div>
                  </div>
                </div>

                <!-- ROW 4: MoM Delta Table (full width) -->
                <div class="chart-container mb-3" id="momTableSection">
                  <div class="chart-title">
                    <i class="bi bi-table me-2" style="color:#1d4ed8"></i>
                    Month-over-Month Improvement Tracker
                    <span class="text-muted fw-normal" style="font-size:.72rem"> — ทุกเดือน พร้อม ▲▼ Delta</span>
                  </div>
                  <div style="font-size:.72rem;background:#f8faff;border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#475569">
                    📊 <b>Key Metrics:</b> Error Rate % + MoM Δ + Coverage % + Status — กดดู trend รายเดือนของทั้งระบบ
                    <br>
                    <span style="background:#d1fae5;color:#065f46;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem">▼ Error Rate ลด = ✅ Improving</span>
                    <span style="background:#fee2e2;color:#dc2626;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">▲ เพิ่ม = ⚠️ Worsening</span>
                    <span style="background:#dbeafe;color:#1d4ed8;padding:1px 8px;border-radius:999px;font-weight:700;font-size:.65rem;margin-left:4px">★ = Primary Month ที่เลือก</span>
                  </div>
                  <div class="table-wrapper">
                    <table class="table table-sm table-hover mb-0" id="momDeltaTable">
                      <thead style="background:linear-gradient(135deg,#1d4ed8,#1e40af);color:#fff;position:sticky;top:0">
                        <tr>
                          <th>Month</th><th>Units Checked</th><th>Errors</th>
                          <th>Error Rate %</th><th>MoM Δ Error</th>
                          <th>Coverage %</th><th>MoM Δ Coverage</th><th>Status</th>
                        </tr>
                      </thead>
                      <tbody id="momDeltaBody">
                        <tr><td colspan="8" class="text-center py-3 text-muted">Refresh Data เพื่อโหลด</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- ROW 5: Pareto (left) + Weekly Trend (right) -->
                <div class="row g-3 mb-3">
                  <div class="col-md-7">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-bar-chart-steps me-2" style="color:#dc2626"></i>
                        Pareto — Top Error Types (80/20 Rule)
                      </div>
                      <div class="chart-insight-bar" id="paretoInsight">
                        📊 <b>หลัก 80/20:</b> Error ส่วนใหญ่มาจาก error types ไม่กี่ตัว — โฟกัสที่ bar สูงซ้ายสุดก่อน
                        <br>
                        <span class="insight-pill red">bar แดง = ต้องแก้ด่วน</span>
                        <span class="insight-pill blue">เส้น = Cumulative %</span>
                        <span class="insight-pill orange">80% line = Pareto Boundary</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:210px"><canvas id="paretoChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-calendar-week me-2" style="color:#7c3aed"></i>
                        Weekly Error Rate Trend
                      </div>
                      <div class="chart-insight-bar">
                        📊 <b>Weekly Pulse:</b> ตรวจจับ spike รายสัปดาห์ — จุดสูงผิดปกติ = เหตุการณ์พิเศษ
                        <br>
                        <span class="insight-pill purple">spike = ต้องสอบสวน</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:210px"><canvas id="weeklyTrendChart"></canvas></div>
                    </div>
                  </div>
                </div>

                <!-- ROW 6: Radar Scorecard (left) + Func Error Breakdown (right) -->
                <div class="row g-3 mb-3">
                  <div class="col-md-5">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-star me-2" style="color:#f59e0b"></i>
                        Dept Quality Radar — Multi-KPI Scorecard
                      </div>
                      <div class="chart-insight-bar">
                        📊 <b>Scorecard:</b> Dept ที่มีพื้นที่ radar กว้าง = ผลงานดีทุกด้าน
                        <br>
                        <span class="insight-pill green">กว้าง = ดี</span>
                        <span class="insight-pill red">แคบ = ต้องปรับปรุง</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:220px"><canvas id="radarScorecardChart"></canvas></div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="chart-container h-100">
                      <div class="chart-title">
                        <i class="bi bi-pie-chart me-2" style="color:#0891b2"></i>
                        Error Breakdown by Function — Drill-down View
                      </div>
                      <div class="chart-insight-bar">
                        📊 <b>Drill-down:</b> Function ไหน contribute error มากที่สุด — สีแดง/ส้ม = ปัญหาหนัก
                        <br>
                        <span class="insight-pill red">สีแดง = Error Rate สูง</span>
                        <span class="insight-pill blue">ขนาด = Volume</span>
                      </div>
                      <div class="chart-canvas-wrap" style="height:220px"><canvas id="funcBreakdownChart"></canvas></div>
                    </div>
                  </div>
                </div>

                <!-- ROW 7: Sub-Function Heatmap (full width) -->
                <div class="chart-container mb-3">
                  <div class="chart-title">
                    <i class="bi bi-grid-3x3-gap me-2" style="color:#be185d"></i>
                    Sub-Function Error Heatmap — Dept × SubFunc Matrix
                    <span class="text-muted fw-normal" style="font-size:.72rem"> — เดือนที่เลือก</span>
                  </div>
                  <div class="chart-insight-bar">
                    📊 <b>Heatmap:</b> Cell แดงเข้ม = ปัญหารุนแรง | Cell ขาว = ปลอดภัย — หา pattern cross-dept
                    <br>
                    <span class="insight-pill red">แดงเข้ม = Error Rate สูงมาก</span>
                    <span class="insight-pill green">เขียว = ปลอดภัย</span>
                    <span class="insight-pill gray">เทา = ไม่มีข้อมูล</span>
                  </div>
                  <div id="subfuncHeatmapContainer" style="overflow-x:auto;min-height:120px">
                    <div class="text-center text-muted py-3 small">Refresh Data เพื่อโหลด Heatmap</div>
                  </div>
                </div>

                <!-- Hidden canvases for backward compat -->
                <canvas id="errorRateChart" style="display:none"></canvas>
                <canvas id="metricsComparisonChart" style="display:none"></canvas>
                <canvas id="errorTypeComparisonChart" style="display:none"></canvas>

              </div>
              
              <button type="button" class="btn btn-primary w-100 mt-4" onclick="loadReportData()" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); border: none; padding: 16px; border-radius: var(--radius-xl); font-weight: 700;">
                <i class="bi bi-arrow-clockwise me-2"></i>Refresh Data
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div id="loader" class="loader-overlay">
      <div class="spinner-border text-primary mb-3" style="width: 4rem; height: 4rem;" role="status"></div>
      <span class="fw-bold fs-5" style="color: var(--primary);">กำลังบันทึกข้อมูล...</span>
  </div>
  <script>
// ===== MOBILE / EMBED GUARD =====
    // This web app must be opened via the Apps Script Web App URL ending with /exec.
    // If the page is opened as a direct googleusercontent "userCodeAppPanel" URL, or in an in-app browser that blocks the iframe,
    // google.script.run will be unavailable and the app will appear blank. Show a helpful message instead.
    (function guardAppsScriptContextSafe(){
      // Apps Script injects google.script.run AFTER the HTML loads.
      // Some in-app browsers / direct googleusercontent "userCodeAppPanel" may block it -> app becomes unusable.
      // We wait briefly; if still missing, show a helpful overlay (without breaking the page).
      const MAX_WAIT_MS = 5000;
      const STEP_MS = 200;
      const started = Date.now();

      function hasGAS(){
        return (typeof google !== 'undefined' && google && google.script && google.script.run);
      }

      function ensureOverlay(){
        let ov = document.getElementById('gasContextOverlay');
        if (ov) return ov;

        ov = document.createElement('div');
        ov.id = 'gasContextOverlay';
        ov.style.cssText = [
          'position:fixed','inset:0','z-index:99999',
          'display:none','align-items:center','justify-content:center',
          'padding:24px','background:rgba(248,250,252,.98)',
          'font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial'
        ].join(';');

        ov.innerHTML = '\n          <div style="max-width:560px;background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.12);padding:22px">\n            <div style="font-size:18px;font-weight:800;margin-bottom:10px;color:#0f172a">เปิดหน้าไม่สำเร็จ</div>\n            <div style="color:#334155;line-height:1.65">\n              หน้านี้ต้องเปิดผ่านลิงก์ <b>Web app</b> ของ Apps Script และต้องให้เบราว์เซอร์อนุญาตการทำงานของ <b>google.script.run</b><br>\n              ถ้าเปิดจาก <b>LINE/Facebook/in‑app browser</b> หรือโดนบล็อก iframe/คุกกี้ จะทำให้ระบบใช้งานไม่ได้\n            </div>\n            <div style="margin-top:12px;color:#334155;line-height:1.65">\n              วิธีแก้:\n              <ol style="margin:8px 0 0 18px">\n                <li>คัดลอกลิงก์ที่ลงท้ายด้วย <code>/exec</code> แล้วเปิดใน <b>Chrome</b> หรือ <b>Safari</b></li>\n                <li>ลองเปิดแบบ Incognito/Private และปิด AdBlock/VPN ชั่วคราว</li>\n                <li>iPhone: Settings → Safari → ปิด “Prevent Cross‑Site Tracking” ชั่วคราวเพื่อทดสอบ</li>\n              </ol>\n            </div>\n          </div>\n        ';

        // If body isn't ready yet, append later.
        const append = () => (document.body ? document.body.appendChild(ov) : setTimeout(append, 50));
        append();
        return ov;
      }

      function showOverlay(){
        const ov = ensureOverlay();
        ov.style.display = 'flex';
      }

      function poll(){
        if (hasGAS()) return;
        if (Date.now() - started >= MAX_WAIT_MS){
          showOverlay();
          return;
        }
        setTimeout(poll, STEP_MS);
      }

      window.addEventListener('load', poll);
    })();

// =========== EXTERNAL LIB LOADER (GAS SAFE) ===========
// Some Google Apps Script wrappers can be sensitive to multiple <script src> tags in <head>.
// We load external libraries dynamically instead.
function __loadScriptOnce(id, src) {
  return new Promise((resolve, reject) => {
    try {
      if (id && document.getElementById(id)) return resolve();
      const s = document.createElement("script");
      if (id) s.id = id;
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Failed to load " + src));
      document.head.appendChild(s);
    } catch (e) {
      reject(e);
    }
  });
}

function __loadScriptFallback(key, urls, timeoutMs) {
  // Tries URLs sequentially until one loads. Resolves true/false.
  return new Promise((resolve) => {
    let i = 0;
    const tryNext = () => {
      if (i >= urls.length) return resolve(false);
      const url = urls[i++];
      const p = __loadScriptOnce(key + "-" + i, url);
      let done = false;
      const t = setTimeout(() => {
        if (done) return;
        done = true;
        console.warn("Script load timeout:", url);
        tryNext();
      }, timeoutMs || 8000);

      p.then(() => {
        if (done) return;
        done = true;
        clearTimeout(t);
        resolve(true);
      }).catch(() => {
        if (done) return;
        done = true;
        clearTimeout(t);
        tryNext();
      });
    };
    tryNext();
  });
}


function __loadExternalLibs() {
  // Load Bootstrap JS (optional) and Chart.js (used on dashboard). CSS is already loaded via <link>.
  const jobs = [];
  jobs.push(__loadScriptOnce("lib-bootstrap", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"));
  // HTML5 QR/Barcode Scanner — multi-CDN fallback
  const qrCdnList = [
    "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",
    "https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js"
  ];
  jobs.push(__loadScriptFallback("lib-qrcode", qrCdnList, 10000));
    // Chart.js (try multiple CDNs to survive corporate/firewall blocks)
  const chartCdnList = [
    "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js",
    "https://unpkg.com/chart.js@4.4.1/dist/chart.umd.min.js"
  ];
  jobs.push(__loadScriptFallback("lib-chartjs", chartCdnList, 8000));
return Promise.allSettled(jobs);
}

// Fire-and-forget: most interactions happen after user clicks, so libs are usually ready.
const __libsReady = __loadExternalLibs().catch((e) => {
  console.warn("External lib load warning", e);
});

function createChart(ctx, config) {
  if (!window.Chart) {
    console.warn("Chart.js not loaded; cannot render charts");
    try {
      if (ctx && ctx.canvas && ctx.canvas.id) {
        drawNoData(ctx.canvas.id, "Cannot load chart library (Chart.js). Check network/SSL or firewall.");
      }
    } catch(e) {}
    return null;
  }
  try {
    // Destroy any existing chart on this canvas before creating new one
    // Chart.js v3+ built-in: Chart.getChart(canvas)
    const existing = Chart.getChart(ctx.canvas);
    if (existing) { existing.destroy(); }
    return new Chart(ctx, config);
  } catch (e) {
    console.error("Chart render failed", e);
    return null;
  }
}

// =========== GLOBAL VARIABLES ===========
    let currentUser = null;
    let currentUserName = null;
    let dccMasterData = []; 
    let pmwiLinks = {};
    let selectedDates = [];
    let selectedTypeFilter = 'Checklist';
    let selectedDeptFilter = 'ALL';
    let errorTrendChart = null;
    let errorRateChart = null;
    let completionChart = null;
    let errorTypeChart = null;
    let topDepartmentsChart = null;
    let errorRateTrendProfChart = null;  // FIX: was missing -> caused ReferenceError in renderProfessionalCharts

    // NEW: Comparison Charts
    let metricsComparisonChart = null;
    let errorTypeComparisonChart = null;
    let deptComparisonChart = null;

    // =========== LOGIN SYSTEM ===========
    function handleLogin(event) {
      event.preventDefault();
      
      const userId = document.getElementById('loginUser').value.trim();
      const userName = document.getElementById('loginName').value.trim();
      
      if (!userId || !userName) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }
      
      currentUser = userId;
      currentUserName = userName;
      const inspectorValue = userId + '-' + userName;
      
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('mainApp').classList.add('active');
      
      document.getElementById('displayUserInfo').textContent = inspectorValue;
      
      document.getElementById('inspectorAreaDisplay').value = inspectorValue;
      document.getElementById('dccInspectorDisplay').value = inspectorValue;
      
      initApp();
      
      // AUTO LOAD DATA REPORT ON LOGIN
      setTimeout(() => {
        loadReportData();
      }, 1000);
    }

    // =========== APP INITIALIZATION ===========
    function initApp() {
      console.log("Starting initApp...");
      
      google.script.run
        .withSuccessHandler(data => {
          console.log("Dropdown loaded:", data);
          document.getElementById('date').value = data.today;
          document.getElementById('dccDate').value = data.today;
          
          const fillCommon = (id, arr) => { 
            let s = document.getElementById(id); 
            s.innerHTML='<option value="">-- เลือก --</option>'; 
            arr.forEach(v => s.add(new Option(v,v))); 
          };
          fillCommon('area', data.areas);
          fillCommon('problem', data.problems);
          // Store zone map if server sends it (areaZoneMap = {Area: [zone1, zone2]})
          if (data.zones && typeof data.zones === 'object') {
            areaZoneMap = data.zones;
          } else if (Array.isArray(data.zones)) {
            // Flat zone list — just populate zone dropdown directly
            fillCommon('zone', data.zones);
          }
        })
        .withFailureHandler(err => {
          console.error("Error loading dropdown:", err);
          alert("ไม่สามารถโหลดข้อมูล Dropdown: " + err);
        })
        .getDropdownData();

      google.script.run
        .withSuccessHandler(data => {
          console.log("DCC Master loaded:", data.length + " rows");
          dccMasterData = data;
          createTypeButtons(); 
        })
        .withFailureHandler(err => {
          console.error("Error loading DCC Master:", err);
          alert("ไม่สามารถโหลด DCC Master: " + err);
        })
        .getDCCMasterData();

      google.script.run
        .withSuccessHandler(links => {
          console.log("PMWI Files loaded:", Object.keys(links).length);
          pmwiLinks = links;
        })
        .withFailureHandler(err => {
          console.error("Error loading PMWI links:", err);
        })
        .getPMWIMapping();
    }

    function createTypeButtons() {
      const types = [...new Set(dccMasterData.map(r => r[0]).filter(String))];
      console.log("Creating type buttons:", types);
      
      const container = document.getElementById('typeContainer');
      if (!container) {
        console.error("typeContainer not found!");
        return;
      }
      
      container.innerHTML = '';
      
      if (types.length === 0) {
        container.innerHTML = '<p class="text-danger">ไม่พบข้อมูล Type ใน Master DCC</p>';
        return;
      }
      
      types.forEach((t, idx) => {
        const radioId = 'type_' + idx;
        const radio = document.createElement('input');
        radio.type = 'radio'; 
        radio.name = 'typeGroup'; 
        radio.id = radioId; 
        radio.value = t;
        radio.onchange = () => selectType(t);
        
        const label = document.createElement('label');
        label.htmlFor = radioId; 
        label.innerText = t;
        
        container.appendChild(radio); 
        container.appendChild(label);
      });
    }

    function selectType(val) {
      document.getElementById('dccType').value = val;
      filterDept(); 
      if(val === 'PMWI' || val === 'PM/WI') {
        document.getElementById('pmSection').style.display = 'block';
      } else {
        document.getElementById('pmSection').style.display = 'none';
      }
    }

    function fillSelect(id, items) {
      let s = document.getElementById(id);
      if (!s) {
        console.error("Element not found:", id);
        return;
      }
      s.innerHTML = '<option value="">- เลือก -</option>';
      items.forEach(v => s.add(new Option(v, v)));
    }
    
    function filterDept() {
      const type = document.getElementById('dccType').value;
      const depts = [...new Set(dccMasterData.filter(r => r[0] == type).map(r => r[1]).filter(String))];
      fillSelect('dccDept', depts);
      fillSelect('dccFunc', []); 
      fillSelect('dccSubFunc', []); 
      resetDetails();
    }
    
    function filterFunc() {
      const type = document.getElementById('dccType').value;
      const dept = document.getElementById('dccDept').value;
      const funcs = [...new Set(dccMasterData.filter(r => r[0] == type && r[1] == dept).map(r => r[2]).filter(String))];
      fillSelect('dccFunc', funcs);
      fillSelect('dccSubFunc', []); 
      resetDetails();
    }
    
    function filterSubFunc() {
      const type = document.getElementById('dccType').value;
      const dept = document.getElementById('dccDept').value;
      const func = document.getElementById('dccFunc').value;
      const subs = [...new Set(dccMasterData.filter(r => r[0] == type && r[1] == dept && r[2] == func).map(r => r[3]).filter(String))];
      fillSelect('dccSubFunc', subs);
      resetDetails();
    }

    function lookupMasterDetails() {
      const type = document.getElementById('dccType').value;
      const dept = document.getElementById('dccDept').value;
      const func = document.getElementById('dccFunc').value;
      const sub = document.getElementById('dccSubFunc').value;
      const row = dccMasterData.find(r => r[0] == type && r[1] == dept && r[2] == func && r[3] == sub);
      
      const btnContainer = document.getElementById('btnViewWIContainer');
      const linkBtn = document.getElementById('linkViewWI');
      const imgContainer = document.getElementById('wiImageContainer');
      
      if ((type === 'PMWI' || type === 'PM/WI') && pmwiLinks[sub]) {
        const fileData = pmwiLinks[sub];
        
        if (fileData.pdfUrl) {
          btnContainer.style.display = 'block'; 
          linkBtn.href = fileData.pdfUrl;
        } else {
          btnContainer.style.display = 'none';
        }
        
        if (fileData.imageUrl) {
          imgContainer.style.display = 'block';
          imgContainer.innerHTML = '\n            <img src="' + (fileData.thumbnailUrl || fileData.imageUrl) + '" \n                 alt="WI Preview" \n                 class="img-fluid rounded shadow-sm"\n                 style="max-width: 100%; cursor: pointer;"\n                 onclick="window.open(\'' + (fileData.imageUrl) + '\', \'_blank\')"\n                 onerror="this.src=\'' + (fileData.imageUrl) + '\'">\n            <p class="text-muted small mt-2 mb-0">\n              <i class="bi bi-info-circle me-1"></i>คลิกที่รูปเพื่อดูขนาดเต็ม\n            </p>\n          ';
        } else {
          imgContainer.style.display = 'none';
        }
           
      } else {
        btnContainer.style.display = 'none'; 
        linkBtn.href = "#";
        imgContainer.style.display = 'none';
      }

      if (row) {
        document.getElementById('dccPlanUnit').value = row[4]; 
        for (let i = 1; i <= 5; i++) {
          const val = row[4 + i]; 
          const box = document.getElementById('boxL' + i);
          const input = document.getElementById('dccList' + i);
          if (val && val.toString().trim() !== "") { 
            input.value = val; 
            box.style.display = 'flex'; 
          } else { 
            input.value = ""; 
            box.style.display = 'none'; 
          }
        }
      } else { 
        resetDetails(); 
      }
    }

    function resetDetails() {
      document.getElementById('dccPlanUnit').value = "";
      document.getElementById('btnViewWIContainer').style.display = 'none';
      document.getElementById('wiImageContainer').style.display = 'none';
      for(let i=1; i<=5; i++) { 
        document.getElementById('dccList'+i).value = ""; 
        document.getElementById('boxL'+i).style.display = 'none'; 
      }
    }

    // =========== BARCODE/ARTICLE LOOKUP ===========
    setTimeout(() => {
      const art1 = document.getElementById('art1');
      const art2 = document.getElementById('art2');
      if (art1) art1.onchange = () => smartLookup(1);
      if (art2) art2.onchange = () => smartLookup(2);
    }, 500);

    function smartLookup(num) {
      const val = document.getElementById('art'+num).value;
      if(!val) return;
      
      google.script.run.withSuccessHandler(res => {
        if(res && res.found) {
          document.getElementById('art'+num).value = res.article;
          document.getElementById('desc'+num).value = res.desc;
        } else {
          document.getElementById('desc'+num).value = "";
        }
      }).smartSearch(val);
    }
   let scanTargetId = null;

    function startScan(id) {
      if (typeof Html5Qrcode === 'undefined') {
        alert('ระบบสแกนยังโหลดไม่เสร็จ กรุณารอสักครู่แล้วกดใหม่ครับ');
        return;
      }

      scanTargetId = id;

      // สร้าง input file แบบซ่อนไว้ ถ้ายังไม่มี
      let fileInput = document.getElementById('qr-input-file');
      if (!fileInput) {
          fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.id = 'qr-input-file';
          fileInput.accept = 'image/*';
          fileInput.capture = 'environment'; // คำสั่งวิเศษ บังคับเปิดกล้องหลังมือถือทันที
          fileInput.style.display = 'none';
          fileInput.onchange = handleFileScan;
          document.body.appendChild(fileInput);
      }

      // จำลองการคลิกเพื่อเปิดกล้องมือถือ
      fileInput.click();
    }

    function handleFileScan(event) {
      if (event.target.files.length === 0) return;

      const file = event.target.files[0];
      const readerDiv = document.getElementById('reader');

      // แสดงข้อความกำลังประมวลผล
      readerDiv.style.display = 'block';
      readerDiv.innerHTML = '<div class="text-center p-4"><div class="spinner-border text-primary mb-2"></div><br><b>กำลังอ่านบาร์โค้ด...</b></div>';

      // ใช้ Html5Qrcode แบบ Core (ทำงานเบื้องหลัง ไม่ต้องมีหน้าจอ UI)
      const html5QrCode = new Html5Qrcode("reader");

      html5QrCode.scanFile(file, true)
        .then(decodedText => {
            // ----- เมื่อสแกนและถอดรหัสสำเร็จ -----
            const cleaned = decodedText.trim();
            if (scanTargetId === 'loginUser') {
              const el = document.getElementById('loginUser');
              if (el) { el.value = cleaned; el.dispatchEvent(new Event('input')); }
            } else if (scanTargetId && scanTargetId.startsWith('art')) {
              const num = scanTargetId.replace('art', '');
              const el = document.getElementById(scanTargetId);
              if (el) el.value = cleaned;
              if (typeof smartLookup === 'function') smartLookup(num);
            } else if (scanTargetId) {
              const el = document.getElementById(scanTargetId);
              if (el) el.value = cleaned;
            }
            readerDiv.style.display = 'none'; // ซ่อนข้อความ
        })
        .catch(err => {
            // ----- เมื่อหาบาร์โค้ดไม่เจอในรูป -----
            alert("สแกนไม่พบ Barcode ในรูปภาพ กรุณาถ่ายให้เห็นบาร์โค้ดชัดๆ แล้วลองใหม่ครับ");
            readerDiv.style.display = 'none';
        })
        .finally(() => {
           // ล้างค่า input เพื่อให้สามารถกดถ่ายรูปเดิมซ้ำได้
           event.target.value = '';
           html5QrCode.clear().catch(e => {});
        });
    }

    // เก็บฟังก์ชันนี้ไว้เผื่อระบบอื่นเรียกใช้ แต่ไม่ต้องทำอะไรแล้ว
    function stopScan() {
       document.getElementById('reader').style.display = 'none';
    }
    
    // =========== SAVE FUNCTIONS ===========
    function showSuccessMessage(msg) {
      const div = document.createElement('div');
      div.className = 'fade-success';
      div.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>' + msg;
      document.body.appendChild(div);
      
      setTimeout(() => {
        div.style.animation = 'successPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) reverse';
        setTimeout(() => div.remove(), 300);
      }, 2500);
    }

    function switchToReportTab() {
      const tabReport = document.getElementById('tab-report');
      const tabArea = document.getElementById('tab-area');
      const tabDCC = document.getElementById('tab-dcc');
      const contentReport = document.getElementById('content-report');
      const contentArea = document.getElementById('content-area');
      const contentDCC = document.getElementById('content-dcc');
      
      tabReport.classList.add('active');
      tabArea.classList.remove('active');
      tabDCC.classList.remove('active');
      contentReport.classList.add('show', 'active');
      contentArea.classList.remove('show', 'active');
      contentDCC.classList.remove('show', 'active');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function handleSaveArea() {
      if(!document.getElementById('date').value)    { alert('กรุณาระบุ Date');   return; }
      if(!document.getElementById('area').value)    { alert('กรุณาเลือก Area'); return; }
      saveDataCommon('formArea', 'imagesArea');
    }

    // Populate Zone dropdown based on selected Area
    function onAreaChange() {
      const areaVal = document.getElementById('area')?.value || '';
      const zoneEl  = document.getElementById('zone');
      if (!zoneEl) return;
      // Zone options can be loaded from server; for now generate from areaZoneMap
      const zoneMap = areaZoneMap || {};
      const zones   = zoneMap[areaVal] || [];
      zoneEl.innerHTML = '<option value="">-- Zone (Optional) --</option>';
      zones.forEach(z => zoneEl.add(new Option(z, z)));
    }
    let areaZoneMap = {};  // populated from getDropdownData
    
    async function handleSaveDCC() {
      if(!document.getElementById('dccType').value) { 
        alert("กรุณาเลือก Type"); 
        return; 
      }
      if(!document.getElementById('dccDept').value) { 
        alert("กรุณาเลือก Department"); 
        return; 
      }
      saveDataCommon('formDCC', 'imagesDCC');
    }

    // 1. ฟังก์ชันช่วยบีบอัดรูปภาพก่อนส่ง (เพิ่มใหม่)
    function compressImage(file, maxSize = 1200, quality = 0.7) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            let width = img.width;
            let height = img.height;

            // คำนวณอัตราส่วนเพื่อย่อขนาด
            if (width > height) {
              if (width > maxSize) {
                height = Math.round(height *= maxSize / width);
                width = maxSize;
              }
            } else {
              if (height > maxSize) {
                width = Math.round(width *= maxSize / height);
                height = maxSize;
              }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            
            // แปลงเป็น JPEG และบีบอัด (ลดคุณภาพลงเหลือ 70%)
            const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
            // ตัดส่วนหัว 'data:image/jpeg;base64,' ออกเพื่อส่งให้ Apps Script
            resolve(compressedBase64.split(',')[1]); 
          };
          img.onerror = reject;
        };
        reader.onerror = reject;
      });
    }

    // 2. ฟังก์ชัน Save ตัวใหม่ที่เรียกใช้การบีบอัดรูป
    async function saveDataCommon(formId, imgId) {
      const btn = document.querySelector('#' + formId + ' .btn-submit');
      const lod = document.getElementById('loader');
      btn.disabled = true; 
      lod.style.display = 'flex';
      
      const fileInput = document.getElementById(imgId);
      const imageFiles = [];
      const maxImg = (formId === 'formDCC') ? 3 : 4; 
      
      try {
        // ใช้ฟังก์ชันบีบอัดรูปภาพแทนการดึงขนาดเต็ม
        for(let i=0; i<fileInput.files.length && i<maxImg; i++) {
          const file = fileInput.files[i];
          // ส่งไปย่อขนาด (กว้าง/ยาว ไม่เกิน 1200px) และบีบอัดคุณภาพเหลือ 70% (0.7)
          const compressedData = await compressImage(file, 1200, 0.7); 
          imageFiles.push({ 
            data: compressedData, 
            type: 'image/jpeg', // บังคับเซฟเป็น jpeg เพื่อลดขนาด
            name: file.name.replace(/\.[^/.]+$/, "") + ".jpg" // แปลงนามสกุลไฟล์
          });
        }
        
        const inspectorValue = currentUser + '-' + currentUserName;
        let payload = { images: imageFiles, inspector: inspectorValue };
        
        if(formId === 'formArea') {
          payload.date     = document.getElementById('date').value;
          payload.area     = document.getElementById('area').value;
          payload.location = document.getElementById('location').value;
          payload.problem  = document.getElementById('problem').value;
          payload.art1     = document.getElementById('art1').value;
          payload.desc1    = document.getElementById('desc1').value;
          payload.qty1     = document.getElementById('qty1').value;
          payload.art2     = document.getElementById('art2').value;
          payload.desc2    = document.getElementById('desc2').value;
          payload.qty2     = document.getElementById('qty2').value;
          payload.remark   = document.getElementById('remark').value;
          
          google.script.run
            .withSuccessHandler(function(msg) { 
              handleSuccess(msg, formId, btn, lod);
            })
            .withFailureHandler(function(err) { 
              handleError(err, btn, lod);
            })
            .saveData(payload);
        } else {
          payload.dccDate = document.getElementById('dccDate').value;
          payload.type = document.getElementById('dccType').value;
          payload.department = document.getElementById('dccDept').value;
          payload.func = document.getElementById('dccFunc').value;
          payload.subfunc = document.getElementById('dccSubFunc').value;
          payload.planUnit = document.getElementById('dccPlanUnit').value;
          payload.unitCheck = document.getElementById('dccUnitCheck').value;
          payload.errUnit = document.getElementById('dccErrUnit').value;
          payload.list1 = document.getElementById('dccList1').value;
          payload.list2 = document.getElementById('dccList2').value;
          payload.list3 = document.getElementById('dccList3').value;
          payload.list4 = document.getElementById('dccList4').value;
          payload.list5 = document.getElementById('dccList5').value;
          payload.remark = document.getElementById('dccRemark').value;
          
          google.script.run
            .withSuccessHandler(function(msg) { 
              handleSuccess(msg, formId, btn, lod);
            })
            .withFailureHandler(function(err) { 
              handleError(err, btn, lod);
            })
            .saveDCCData(payload);
        }
      } catch (error) {
         handleError("เกิดข้อผิดพลาดในการประมวลผลรูปภาพ: " + error, btn, lod);
      }
    }
    // ===== SCROLL HELPERS =====
    function scrollToFormTop(formId) {
      const targetId = (formId === 'formArea') ? 'content-area' : (formId === 'formDCC') ? 'content-dcc' : null;
      const el = targetId ? document.getElementById(targetId) : null;
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function handleSuccess(msg, formId, btn, lod) {
      lod.style.display = 'none'; 
      showSuccessMessage(msg);
      
            // Stay on the current tab and jump to the top of the current form
      scrollToFormTop(formId);

document.getElementById('formArea').reset();
      document.getElementById('formDCC').reset();
      
      // ── Re-set date = today หลัง reset (form.reset() จะ clear date field) ──
      const _todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD format
      const _dateEl    = document.getElementById('date');
      const _dccDateEl = document.getElementById('dccDate');
      if(_dateEl)    _dateEl.value    = _todayStr;
      if(_dccDateEl) _dccDateEl.value = _todayStr;

      const inspectorValue = currentUser + '-' + currentUserName;
      document.getElementById('inspectorAreaDisplay').value = inspectorValue;
      document.getElementById('dccInspectorDisplay').value = inspectorValue;
      
      document.querySelectorAll('input[name="typeGroup"]').forEach(r => r.checked = false);
      document.getElementById('dccType').value = "";
      document.getElementById('pmSection').style.display = 'none';
      document.getElementById('btnViewWIContainer').style.display = 'none';
      document.getElementById('wiImageContainer').style.display = 'none';
      fillSelect('dccDept', []);
      fillSelect('dccFunc', []);
      fillSelect('dccSubFunc', []);
      resetDetails();
      
      setTimeout(() => {
        btn.disabled = false;
        // FIX LOOP: removed initApp() here — it caused repeated loadReportData chain
        // AUTO REFRESH DATA (NO TAB SWITCH)
        loadReportData();
      }, 1000);
    }

    function handleError(err, btn, lod) {
      lod.style.display = 'none'; 
      btn.disabled = false; 
      alert("เกิดข้อผิดพลาด: " + err); 
    }

    // =========== DATA REPORT FUNCTIONS ===========
    function loadReportData() {
      console.log("Loading report data...");
      
      const tbody1 = document.getElementById('checkedTableBody');
      const tbody2 = document.getElementById('waitingTableBody');
      
      if (!tbody1 || !tbody2) {
        console.error("Table bodies not found!");
        return;
      }
      
      tbody1.innerHTML = '<tr><td colspan="7" class="text-center py-4"><div class="spinner-border spinner-border-sm"></div> Loading...</td></tr>';
      tbody2.innerHTML = '<tr><td colspan="8" class="text-center py-4"><div class="spinner-border spinner-border-sm"></div> Loading...</td></tr>';
      
      google.script.run
        .withSuccessHandler(function(data) {
          console.log("Report data received:", data);
          
          if (!data) {
            console.error("No data returned!");
            tbody1.innerHTML = '<tr><td colspan="7" class="text-center text-danger py-4">No data</td></tr>';
            tbody2.innerHTML = '<tr><td colspan="8" class="text-center text-danger py-4">No data</td></tr>';
            return;
          }
          
          reportData = data;
      __ensureValidSelectedMonth();
          populateMonthFilter();
          populateDateFilter();
          populateInspectorFilter();
          populateReportDeptFilter();
          const typeSel = document.getElementById('reportTypeFilter');
          if (typeSel) typeSel.value = selectedTypeFilter || 'ALL';
          renderCheckedData();
          renderWaitingData();
          populateSummaryMonthFilters();
        })
        .withFailureHandler(function(err) {
          console.error("Error:", err);
          tbody1.innerHTML = '<tr><td colspan="7" class="text-center text-danger py-4">Error: ' + err + '</td></tr>';
          tbody2.innerHTML = '<tr><td colspan="8" class="text-center text-danger py-4">Error: ' + err + '</td></tr>';
        })
        .getReportData();
    }

    function showReportTab(tab) {
      // แสดง Type/Dept filter กลับสำหรับ tab ที่ไม่ใช่ area
      const rf = document.querySelector('.report-filters');
      if (rf) rf.style.display = tab !== 'area' ? '' : 'none';

      const sections = ['reportChecked', 'reportWaiting', 'reportSummary', 'reportAreaTrend'];
      const buttons  = ['btnViewChecked', 'btnViewWaiting', 'btnViewSummary', 'btnViewArea'];
      
      sections.forEach(s => document.getElementById(s).style.display = 'none');
      buttons.forEach(b => {
        const btn = document.getElementById(b);
        btn.classList.remove('btn-primary', 'btn-warning', 'btn-info', 'active');
        btn.classList.add('btn-outline-' + (b.includes('Checked') ? 'primary' : b.includes('Waiting') ? 'warning' : 'info'));
      });
      
      if (tab === 'checked') {
        document.getElementById('reportChecked').style.display = 'block';
        const btn = document.getElementById('btnViewChecked');
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('active');
      } else if (tab === 'waiting') {
        document.getElementById('reportWaiting').style.display = 'block';
        const btn = document.getElementById('btnViewWaiting');
        btn.classList.remove('btn-outline-warning');
        btn.classList.add('active');
      } else if (tab === 'summary') {
        document.getElementById('reportSummary').style.display = 'block';
        const btn = document.getElementById('btnViewSummary');
        btn.classList.remove('btn-outline-info');
        btn.classList.add('active');
        // FIX: render charts when Summary tab is opened
        if (typeof updateProfessionalDashboard === 'function') {
          updateProfessionalDashboard();
        }
      } else if (tab === 'area') {
        document.getElementById('reportAreaTrend').style.display = 'block';
        const aBtn = document.getElementById('btnViewArea');
        if (aBtn) aBtn.classList.add('active');
        // ซ่อน Type/Dept filter — ไม่เกี่ยวกับ Area Trend
        const rf = document.querySelector('.report-filters');
        if (rf) rf.style.display = 'none';
        setTimeout(() => renderAreaTrend(), 80);
      }
    }

    
    // ====== CHART HELPERS (NO-DATA SAFE) ======
    function drawNoData(canvasId, message) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width || canvas.clientWidth || 400;
      const h = canvas.height || canvas.clientHeight || 220;
      if (!canvas.width) canvas.width = w;
      if (!canvas.height) canvas.height = h;

      ctx.save();
      ctx.fillStyle = '#6b7280';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '600 14px Arial, sans-serif';
      ctx.fillText(message || 'No data available', canvas.width / 2, canvas.height / 2);
      ctx.restore();
    }

    function setChartCaption(canvasId, text) {
      const el = document.getElementById('cap_' + canvasId);
      if (el) el.textContent = text || '';
    }

    function showChartNoData(canvasId, message, hideIfEmpty) {
      drawNoData(canvasId, message);
      setChartCaption(canvasId, message);
      // ซ่อน col เฉพาะเมื่อ hideIfEmpty=true (no data จริงๆ ไม่ใช่ rate=0)
      if (hideIfEmpty) {
        const canvas = document.getElementById(canvasId);
        if (canvas) {
          const col = canvas.closest('[class*="col-"]') || canvas.closest('.chart-container')?.parentElement;
          if (col) col.style.display = 'none';
        }
      }
    }

    function showChartWithData(canvasId) {
      // Restore visibility of chart card and its col wrapper
      const canvas = document.getElementById(canvasId);
      if (canvas) {
        const col = canvas.closest('[class*="col-"]') || canvas.closest('.chart-container')?.parentElement;
        if (col) col.style.display = '';
      }
    }


    

    

    // ===== Comparison (optional) =====
    // Some deployments do not include comparison charts/insights UI.
    // Provide safe fallbacks so the dashboard never crashes.
    function renderComparisonCharts() {
      const sec = document.getElementById('comparisonChartsSection');
      if (sec) sec.style.display = 'none';
    }

    function generateComparisonInsights(month1, month2, data1, data2) {
      const panel = document.getElementById('insightsPanel');
      const content = document.getElementById('insightsContent');
      if (!panel || !content) return;

      const e1 = (data1 && data1.totalError) ? Number(data1.totalError) : 0;
      const u1 = (data1 && data1.totalUnit) ? Number(data1.totalUnit) : 0;
      const e2 = (data2 && data2.totalError) ? Number(data2.totalError) : 0;
      const u2 = (data2 && data2.totalUnit) ? Number(data2.totalUnit) : 0;

      const r1 = (u1 > 0) ? (e1 / u1 * 100) : 0;
      const r2 = (u2 > 0) ? (e2 / u2 * 100) : 0;

      const delta = (r1 !== 0) ? ((r2 - r1) / r1 * 100) : (r2 === 0 ? 0 : 100);
      const direction = (r2 <= r1) ? 'Improvement' : 'Worsened';

      const lines = [
        { icon:'🗓️', text:`Comparison: ${month1} → ${month2}` },
        { icon:'📌', text:`Error Rate: ${r1.toFixed(2)}% → ${r2.toFixed(2)}% (${direction} ${Math.abs(delta).toFixed(1)}%)` },
        { icon:'🔎', text:`Errors: ${e1.toLocaleString()} → ${e2.toLocaleString()} | Units: ${u1.toLocaleString()} → ${u2.toLocaleString()}` },
      ];

      content.innerHTML = lines.map(it => `
        <div class="insight-item">
          <span class="insight-icon">${it.icon}</span>
          <span class="insight-text">${it.text}</span>
        </div>
      `).join('');

      panel.style.display = 'block';
    }
function setChartTitle(canvasId, text) {
      const el = document.getElementById('ttl_' + canvasId);
      if (el) el.innerHTML = text || el.innerHTML;
    }

    

    function _toNum(v, defVal) {
      // Converts various inputs to number safely
      if (v === null || v === undefined) return defVal === undefined ? 0 : defVal;
      if (typeof v === 'number') return isFinite(v) ? v : (defVal === undefined ? 0 : defVal);
      const s = String(v).trim()
        .replace(/[%]/g,'')
        .replace(/,/g,'');
      const n = parseFloat(s);
      return isFinite(n) ? n : (defVal === undefined ? 0 : defVal);
    }
    function _parseMonthKeyToIndex(key) {
      // key format like "Jan-26"
      try {
        const parts = (key || '').split('-');
        if (parts.length !== 2) return -1;
        const m = parts[0].trim();
        const y2 = parseInt(parts[1], 10);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const mi = months.indexOf(m);
        if (mi < 0 || isNaN(y2)) return -1;
        // assume 20xx for 2-digit year
        const y = 2000 + y2;
        return y * 12 + mi;
      } catch (e) {
        return -1;
      }
    }

    function generateSingleMonthInsights(monthKey, monthData, errorRateStr) {
      const panel = document.getElementById('insightsPanel');
      const content = document.getElementById('insightsContent');
      if (!panel || !content) return;

      // Basic values
      const totalErr = (monthData && monthData.totalError) ? Number(monthData.totalError) : 0;
      const totalUnit = (monthData && monthData.totalUnit) ? Number(monthData.totalUnit) : 0;
      const errRate = (typeof errorRateStr === 'string') ? Number(errorRateStr.replace('%','')) : Number(errorRateStr || 0);

      // Compute previous month change if available
      let deltaText = '';
      try {
        const byMonth = reportData?.summary?.byMonth || {};
        const keys = Object.keys(byMonth).filter(k => _parseMonthKeyToIndex(k) >= 0)
          .sort((a,b)=>_parseMonthKeyToIndex(a)-_parseMonthKeyToIndex(b));
        const idx = keys.indexOf(monthKey);
        if (idx > 0) {
          const prevKey = keys[idx-1];
          const prev = byMonth[prevKey] || {};
          const prevRate = (prev.totalUnit > 0) ? (prev.totalError/prev.totalUnit*100) : 0;
          const change = (prevRate !== 0) ? ((errRate - prevRate) / prevRate * 100) : (errRate === 0 ? 0 : 100);
          const direction = (errRate <= prevRate) ? 'Improvement' : 'Worsened';
          deltaText = `${direction}: ${Math.abs(change).toFixed(1)}% (${prevKey}: ${prevRate.toFixed(2)}% → ${monthKey}: ${errRate.toFixed(2)}%)`;
        }
      } catch (e) {
        // ignore
      }

      // Target evaluation
      const target = 2; // 2%
      const targetText = errRate <= target
        ? `On target: Error Rate ${errRate.toFixed(2)}% ≤ ${target}%`
        : `Above target: Error Rate ${errRate.toFixed(2)}% > ${target}%`;

      const insights = [];
      insights.push({ icon:'📌', text:`Month: ${monthKey} | Errors: ${totalErr.toLocaleString()} | Units Checked: ${totalUnit.toLocaleString()}` });
      insights.push({ icon:'🎯', text: targetText });
      if (deltaText) insights.push({ icon:'📈', text: deltaText });
      insights.push({ icon:'🧭', text:'Tip: Use filters (Type / Department) to narrow down and focus improvement actions.' });

      content.innerHTML = insights.map(it => `
        <div class="insight-item">
          <span class="insight-icon">${it.icon}</span>
          <span class="insight-text">${it.text}</span>
        </div>
      `).join('');

      panel.style.display = 'block';
    }

function applyTypeLabels() {
      const typeNow = (selectedTypeFilter && selectedTypeFilter !== 'ALL') ? selectedTypeFilter : 'Checklist';
      // Titles
      setChartTitle('topDepartmentsChart', 'Top Departments (' + typeNow + ') - Error Rate');
      setChartTitle('deptComparisonChart', 'Department Coverage vs Error (' + typeNow + ')');
      setChartTitle('errorRateTrendProfChart', 'Error Trend Analysis (' + typeNow + ') - Last Months');
    }
function safeDestroyChart(refObj, key) {
      try {
        const ch = refObj[key];
        if (ch && typeof ch.destroy === 'function') ch.destroy();
      } catch (e) {}
      refObj[key] = null;
    }

function populateMonthFilter() {
      const select = document.getElementById('filterMonth');
      const months = new Set();
      
      if (reportData && reportData.checked && reportData.checked.dccData) {
        reportData.checked.dccData.forEach(function(row) {
          if (row[1]) months.add(row[1].toString());
        });
      }
      
      select.innerHTML = '<option value="">-- All Months --</option>';
      Array.from(months).sort().forEach(function(m) {
        select.add(new Option(m, m));
      });
    }

    function populateDateFilter() {
      const container = document.getElementById('dateCheckboxes');
      const dates = new Set();
      
      if (reportData && reportData.checked && reportData.checked.dccData) {
        reportData.checked.dccData.forEach(function(row) {
          if (row[0]) dates.add(row[0].toString());
        });
      }
      
      container.innerHTML = '';
      Array.from(dates).sort().reverse().forEach(function(d) {
        const div = document.createElement('div');
        div.className = 'filter-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = d;
        checkbox.id = 'date_' + d.replace(/\//g, '_');
        checkbox.onchange = applyFilters;
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = d;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
      });
    }

    function populateInspectorFilter() {
      const select = document.getElementById('filterInspector');
      const inspectors = new Set();
      
      if (reportData && reportData.checked && reportData.checked.dccData) {
        reportData.checked.dccData.forEach(function(row) {
          if (row[21]) inspectors.add(row[21].toString());
        });
      }
      
      select.innerHTML = '<option value="">-- All Inspectors --</option>';
      Array.from(inspectors).sort().forEach(function(i) {
        select.add(new Option(i, i));
      });
    }

    // ===== Report Type & Department Filters =====
    function populateReportDeptFilter() {
      const deptSelect = document.getElementById('reportDeptFilter');
      if (!deptSelect) return;

      const typeNow = selectedTypeFilter || 'Checklist';

      // For Checklist: always show all 5 fixed departments
      // For PMWI / others: build from data
      let depts = [];

      if (typeNow === 'Checklist' || typeNow === 'ALL') {
        // Fixed departments for Checklist
        depts = ['DC all', 'BC', 'RTV', 'FTDC2'];
      } else {
        // Build from Sheet data for other types
        const _isAllVariant = d => ['All','DC all','DC All','all','ALL'].includes((d||'').trim());
        const set = new Set();
        if (reportData && reportData.checked && Array.isArray(reportData.checked.dccData)) {
          reportData.checked.dccData.forEach(r => {
            const t = (r[5] || '').toString().trim();
            const dept = (r[6] || '').toString().trim();
            if (!dept || _isAllVariant(dept)) return;
            if (typeNow === 'ALL' || t === typeNow) set.add(dept);
          });
        }
        if (Array.isArray(reportData && reportData.waiting)) {
          reportData.waiting.forEach(it => {
            const t = (it.type || '').toString().trim();
            const dept = (it.department || '').toString().trim();
            if (!dept || _isAllVariant(dept)) return;
            if (typeNow === 'ALL' || t === typeNow) set.add(dept);
          });
        }
        depts = Array.from(set).sort((a,b)=>a.localeCompare(b));
      }

      // Build dropdown: All (top) + departments
      deptSelect.innerHTML = '<option value="ALL">All</option>';
      depts.forEach(d => deptSelect.add(new Option(d, d)));

      // Keep current selection if valid
      if (selectedDeptFilter && Array.from(deptSelect.options).some(o => o.value === selectedDeptFilter)) {
        deptSelect.value = selectedDeptFilter;
      } else {
        deptSelect.value = 'ALL';
        selectedDeptFilter = 'ALL';
      }
    }


    function onReportFilterChanged() {
      const prevType = selectedTypeFilter;
      const typeSel = document.getElementById('reportTypeFilter');
      const deptSel = document.getElementById('reportDeptFilter');
      if (typeSel) selectedTypeFilter = typeSel.value || 'Checklist';
      if (deptSel) selectedDeptFilter = deptSel.value || 'ALL';

      // If Type changed, rebuild Department list so it matches the selected Type
      if (prevType !== selectedTypeFilter) {
        selectedDeptFilter = 'ALL';
        populateReportDeptFilter();
      }

      renderCheckedData();
      renderWaitingData();

      // Update charts if summary is visible
      const summarySection = document.getElementById('reportSummary');
      if (summarySection && summarySection.style.display !== 'none') {
        updateProfessionalDashboard();
      }
    }

    function toggleDateFilter() {
      const dropdown = document.getElementById('dateFilterDropdown');
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }

    function filterByType(type) {
      selectedTypeFilter = type;
      
      const buttons = document.querySelectorAll('.filter-section .btn-group button');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      
      applyFilters();
    }

    function applyFilters() {
      selectedDates = Array.from(document.querySelectorAll('#dateCheckboxes input:checked')).map(cb => cb.value);
      renderCheckedData();
    }

    function renderCheckedData() {
      const tbody = document.getElementById('checkedTableBody');
      const filterMonth = document.getElementById('filterMonth').value;
      const filterInspector = document.getElementById('filterInspector').value;
      
      if (!reportData || !reportData.checked || !reportData.checked.dccData || reportData.checked.dccData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No data available</td></tr>';
        return;
      }
      
      let html = '';
      let count = 0;
      
      reportData.checked.dccData.forEach(function(row) {
        const date = row[0] || '';
        const month = row[1] || '';
        const type = row[5] || '';
        const dept = row[6] || '';
        const func = row[7] || '';
        const subfunc = row[8] || '';
        const unitCheck = row[10] || '0';
        const inspector = row[21] || '-';
        
        if (filterMonth && month !== filterMonth) return;
        if (selectedDates.length > 0 && !selectedDates.includes(date)) return;
        if (selectedTypeFilter !== 'ALL' && type !== selectedTypeFilter) return;
        if (selectedDeptFilter !== 'ALL' && dept !== selectedDeptFilter) return;
        if (filterInspector && inspector !== filterInspector) return;
        
        const badgeClass = (type === 'PMWI' || type === 'PM/WI') ? 'badge-pmwi' : 'badge-checklist';
        
        html += '<tr>';
        html += '<td>' + date + '</td>';
        html += '<td><span class="badge ' + badgeClass + '">' + type + '</span></td>';
        html += '<td>' + dept + '</td>';
        html += '<td>' + func + '</td>';
        html += '<td>' + subfunc + '</td>';
        html += '<td><strong>' + unitCheck + '</strong></td>';
        html += '<td>' + inspector + '</td>';
        html += '</tr>';
        
        count++;
      });
      
      if (count === 0) {
        html = '<tr><td colspan="7" class="text-center text-muted py-4">No records match filters</td></tr>';
      }
      
      tbody.innerHTML = html;
    }


    // =========== EXPORT FUNCTIONS ===========
    function exportToExcel() {
      const activeTab = document.querySelector('.btn-report-checked.active, .btn-report-waiting.active, .btn-report-summary.active');
      const tabName = activeTab ? activeTab.textContent.trim() : 'Report';
      
      let rows = [];
      let filename = 'SCD_Report_' + new Date().toISOString().slice(0,10) + '.csv';

      // Collect data based on active tab
      const checkedVisible = document.getElementById('reportChecked')?.style.display !== 'none';
      const waitingVisible = document.getElementById('reportWaiting')?.style.display !== 'none';

      if (waitingVisible) {
        // Export waiting items
        rows.push(['Type','Department','Function','Sub-Function','Target','Checked','Remaining','Status']);
        if (reportData && reportData.waiting) {
          reportData.waiting.forEach(item => {
            if (selectedTypeFilter !== 'ALL' && item.type !== selectedTypeFilter) return;
            if (selectedDeptFilter !== 'ALL' && item.department !== selectedDeptFilter) return;
            const prog = item.target > 0 ? (item.checked/item.target*100).toFixed(1) : '0';
            const st = _waitingStatus(item, prog);
            rows.push([item.type, item.department, item.function, item.subFunction,
              item.target, item.checked, item.remaining, st.label.replace(/[🔴🟠🟢✅⛔]/u,'').trim()]);
          });
        }
        filename = 'SCD_Waiting_' + new Date().toISOString().slice(0,10) + '.csv';
      } else {
        // Export checked items
        rows.push(['Date','Month','Type','Department','Function','Sub-Function','Plan','Unit Check','Err Unit','Inspector']);
        if (reportData && reportData.checked && reportData.checked.dccData) {
          reportData.checked.dccData.forEach(r => {
            const t = (r[5]||'').trim(), d = (r[6]||'').trim();
            if (selectedTypeFilter !== 'ALL' && t !== selectedTypeFilter) return;
            if (selectedDeptFilter !== 'ALL' && d !== selectedDeptFilter) return;
            rows.push([r[0]||'', r[1]||'', t, d, r[7]||'', r[8]||'', r[9]||0, r[10]||0, r[11]||0, r[21]||'']);
          });
        }
        filename = 'SCD_Checked_' + new Date().toISOString().slice(0,10) + '.csv';
      }

      // Build CSV
      const csv = rows.map(row =>
        row.map(cell => '"' + String(cell||'').replace(/"/g,'""') + '"').join(',')
      ).join('\n');

      const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function exportToPDF() {
      // Best approach for Apps Script Web App: Print dialog with print-optimized CSS
      const printStyle = `
        <style>
          @media print {
            body { background: white !important; padding: 0 !important; }
            .header-banner { border-radius: 0 !important; margin: 0 0 16px !important; }
            .nav-pills-modern, .btn-scan, .btn-submit, #btnRefresh,
            .btn-report-checked, .btn-report-waiting, .btn-report-summary,
            .report-filters, #advToggleWrap, .chart-info-box { display: none !important; }
            .chart-container { page-break-inside: avoid; height: auto !important; min-height: 300px; }
            .stat-card { break-inside: avoid; }
            canvas { max-width: 100% !important; }
          }
        </style>`;

      const head = document.head.innerHTML;
      const body = document.getElementById('reportSummary') || document.getElementById('reportChecked') || document.body;
      
      const win = window.open('', '_blank');
      if (!win) { alert('กรุณาอนุญาต Popup เพื่อ Print PDF\nSettings → Allow popup for this site'); return; }
      win.document.write('<!DOCTYPE html><html><head>' + head + printStyle + '</head><body style="padding:20px;background:white">');
      win.document.write('<h2 style="font-family:sans-serif;color:#1d4ed8;margin-bottom:16px">SCD Inspection Report — ' + new Date().toLocaleDateString('th-TH') + '</h2>');
      win.document.write(document.querySelector('.stats-grid')?.outerHTML || '');
      win.document.write('<div style="margin-top:20px">' + (document.getElementById('mainChartsSection')?.outerHTML || '') + '</div>');
      win.document.write('</body></html>');
      win.document.close();
      setTimeout(() => { win.focus(); win.print(); }, 600);
    }

    function _waitingStatus(item, progress) {
      // Estimate status by progress vs current day-of-month
      const now = new Date();
      const dayOfMonth = now.getDate();
      const daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
      const monthProgress = (dayOfMonth / daysInMonth) * 100;
      const prog = parseFloat(progress);

      if (prog >= 100) return { label: '✅ Done', cls: 'success', rowCls: '' };
      if (prog === 0)  return { label: '⛔ Not Started', cls: 'danger',  rowCls: 'table-danger' };
      if (prog < monthProgress - 30) return { label: '🔴 Overdue',   cls: 'danger',  rowCls: 'table-danger' };
      if (prog < monthProgress - 10) return { label: '🟠 Behind',    cls: 'warning', rowCls: 'table-warning' };
      return { label: '🟢 On Track', cls: 'success', rowCls: '' };
    }

    function renderWaitingData() {
      const tbody = document.getElementById('waitingTableBody');
      
      if (!reportData || !reportData.waiting || reportData.waiting.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center py-4"><div style="font-size:3rem">🎉</div><div class="mt-2 fw-bold">All items checked!</div></td></tr>';
        return;
      }
      
      let html = '';
      let overdue = 0, behind = 0, notStarted = 0, onTrack = 0;
      
      reportData.waiting.forEach(function(item) {
        const rawProgress = (item.target && item.target > 0) ? ((item.checked / item.target) * 100) : 0;
        const progress = Math.max(0, Math.min(100, rawProgress)).toFixed(1);
        const progressColor = progress < 50 ? 'danger' : (progress < 80 ? 'warning' : 'success');
        const badgeClass = item.type === 'PMWI' ? 'badge-pmwi' : 'badge-checklist';
        const status = _waitingStatus(item, progress);

        // Apply Type/Department filters
        if (selectedTypeFilter !== 'ALL' && item.type !== selectedTypeFilter) return;
        if (selectedDeptFilter !== 'ALL' && item.department !== selectedDeptFilter) return;

        // Count for summary banner
        if (status.cls === 'danger' && status.label.includes('Overdue')) overdue++;
        else if (status.label.includes('Behind')) behind++;
        else if (status.label.includes('Not Started')) notStarted++;
        else onTrack++;
        
        html += '<tr class="' + status.rowCls + '">';
        html += '<td><span class="badge ' + badgeClass + '">' + item.type + '</span></td>';
        html += '<td>' + (item.department||'-') + '</td>';
        html += '<td style="font-size:0.82rem">' + (item.function||'-') + '</td>';
        html += '<td style="font-size:0.82rem">' + (item.subFunction||'-') + '</td>';
        html += '<td class="text-center fw-bold">' + (item.target||0) + '</td>';
        html += '<td class="text-center">' + (item.checked||0) + '</td>';
        html += '<td class="text-center fw-bold text-danger">' + (item.remaining||0) + '</td>';
        html += '<td><span class="badge bg-' + status.cls + '" style="font-size:0.75rem;white-space:nowrap">' + status.label + '</span></td>';
        html += '<td class="progress-cell"><div class="progress"><div class="progress-bar bg-' + progressColor + '" style="width:' + progress + '%">' + progress + '%</div></div></td>';
        html += '</tr>';
      });
      
      // Summary banner
      const bannerEl = document.getElementById('waitingSummaryBanner');
      if (bannerEl) {
        const total = overdue + behind + notStarted + onTrack;
        if (total > 0) {
          bannerEl.innerHTML = 
            '<span class="me-3">📋 Total: <strong>' + total + '</strong></span>' +
            (overdue   > 0 ? '<span class="me-3 text-danger">🔴 Overdue: <strong>' + overdue + '</strong></span>' : '') +
            (behind    > 0 ? '<span class="me-3 text-warning">🟠 Behind: <strong>' + behind + '</strong></span>' : '') +
            (notStarted> 0 ? '<span class="me-3 text-danger">⛔ Not Started: <strong>' + notStarted + '</strong></span>' : '') +
            '<span class="text-success">🟢 On Track: <strong>' + onTrack + '</strong></span>';
          bannerEl.style.display = 'flex';
        }
      }
      
      tbody.innerHTML = html || '<tr><td colspan="9" class="text-center py-3 text-muted">No items match current filter</td></tr>';
    }

    // =========== SUMMARY FUNCTIONS ===========
    const colorPalettes = {
      vibrant: [
        '#1d4ed8', '#059669', '#f59e0b', '#dc2626',
        '#7c3aed', '#0891b2', '#d97706', '#be185d'
      ],
      professional: [
        '#1e3a8a', '#065f46', '#92400e', '#991b1b',
        '#5b21b6', '#164e63', '#78350f', '#831843'
      ],
      // Sequential for bar charts: green→yellow→red by severity
      severity: (n) => {
        const colors = [];
        for (let i = 0; i < n; i++) {
          const ratio = n > 1 ? i / (n-1) : 0;
          if (ratio < 0.4) colors.push('#10b981');      // green: low error
          else if (ratio < 0.7) colors.push('#f59e0b'); // amber: medium
          else colors.push('#ef4444');                  // red: high error
        }
        return colors;
      }
    };

    function populateSummaryMonthFilters() {
      if (!reportData?.checked?.dccData?.length) return;

      // sort เรียงตาม chronological ไม่ใช่ alphabetical
      function mkSort(mk){
        const mm={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
        const p=(mk||'').split('-'); return (2000+parseInt(p[1]||0))*12+(mm[p[0]]||0);
      }

      // ดึง months จาก dccData โดยตรง — ครอบคลุมกว่า summary.byMonth
      const allMonths = [...new Set(
        reportData.checked.dccData.map(r=>(r[1]||'').trim()).filter(Boolean)
      )].sort((a,b)=>mkSort(a)-mkSort(b));

      const select1 = document.getElementById('primaryMonthSelect');
      const select2 = document.getElementById('compareMonthSelect');
      if (!select1 || !select2) return;

      select1.innerHTML = '<option value="">-- Select Month --</option>';
      select2.innerHTML = '<option value="">-- No Comparison --</option>';

      allMonths.forEach(m => {
        select1.add(new Option(m, m));
        select2.add(new Option(m, m));
      });

      // auto-select เดือนล่าสุด
      if (allMonths.length > 0) {
        select1.value = allMonths[allMonths.length - 1];
        updateProfessionalDashboard();
      }
    }

// MODULE 1: PROFESSIONAL CHARTS - JavaScript Functions

    // ========== HELPER FUNCTIONS ==========
    function calculateMovingAverage(data, window) {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (i < window - 1) {
          result.push(null);
        } else {
          const sum = data.slice(i - window + 1, i + 1).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
          result.push((sum / window).toFixed(2));
        }
      }
      return result;
    }
    
    function countInspectors(month) {
      const inspectors = new Set();
      if (reportData && reportData.checked && reportData.checked.dccData) {
        reportData.checked.dccData.forEach(row => {
          if (row[1] === month && row[21]) {
            inspectors.add(row[21]);
          }
        });
      }
      return inspectors.size;
    }
    
    function getDeptErrorRate(dept, month) {
      if (!reportData || !reportData.checked || !reportData.checked.dccData) return 0;
      
      let totalUnit = 0;
      let totalError = 0;
      
      reportData.checked.dccData.forEach(row => {
        const rowMonth = row[1] || '';
        const rowDept = row[6] || '';
        const type = row[5] || '';  // r[5]=Type (PMWI/Checklist)
        
        if (rowMonth === month && rowDept === dept && (type === 'PMWI' || type === 'PM/WI')) {
          totalUnit += parseFloat(row[10]) || 0;
          totalError += parseFloat(row[11]) || 0;
        }
      });
      
      return totalUnit > 0 ? ((totalError / totalUnit) * 100) : 0;
    }

// MODULE 4: MAIN DASHBOARD UPDATE - updateProfessionalDashboard Function
// ด้วยฟังก์ชัน updateProfessionalDashboard() นี้

    // ========== MAIN PROFESSIONAL DASHBOARD UPDATE ==========
    
    // ===== Comparison table (safe no-op if UI not present) =====
    function showComparisonTable(month1, month2, data1, data2) {
      const tbl = document.getElementById('comparisonTable');
      const wrap = document.getElementById('comparisonTableSection') || document.getElementById('comparisonTableWrapper');
      if (!tbl) {
        // If this build does not include a comparison table UI, just skip.
        return;
      }

      // Build a simple, readable comparison table for key metrics
      const m1 = data1?.metrics || data1 || {};
      const m2 = data2?.metrics || data2 || {};

      const rows = [
        { label: 'Total Errors', a: +(m1.totalErrors || m1.errors || 0), b: +(m2.totalErrors || m2.errors || 0) },
        { label: 'Total Units Checked', a: +(m1.totalUnits || m1.units || 0), b: +(m2.totalUnits || m2.units || 0) },
        { label: 'Error Rate (%)', a: +(m1.errorRate || 0), b: +(m2.errorRate || 0), fmt: 'pct' },
        { label: 'Coverage (%)', a: +(m1.coverage || 0), b: +(m2.coverage || 0), fmt: 'pct' },
        { label: 'Active Inspectors', a: +(m1.activeInspectors || 0), b: +(m2.activeInspectors || 0) }
      ];

      const fmt = (v, kind) => {
        if (kind === 'pct') return (isFinite(v) ? v.toFixed(2) : '0.00') + '%';
        return isFinite(v) ? v.toLocaleString() : '0';
      };

      const diffHtml = (a, b, kind) => {
        const d = (a - b);
        const sign = d > 0 ? '↑' : d < 0 ? '↓' : '=';
        const cls = d > 0 ? 'trend-up' : d < 0 ? 'trend-down' : '';
        const val = kind === 'pct' ? Math.abs(d).toFixed(2) + '%' : Math.abs(d).toLocaleString();
        return '<span class="' + cls + '">' + sign + ' ' + val + '</span>';
      };

      tbl.innerHTML =
        '<thead><tr>' +
          '<th>Metric</th>' +
          '<th>' + month1 + '</th>' +
          '<th>' + month2 + '</th>' +
          '<th>Δ</th>' +
        '</tr></thead>' +
        '<tbody>' +
          rows.map(r => (
            '<tr>' +
              '<td>' + r.label + '</td>' +
              '<td>' + fmt(r.a, r.fmt) + '</td>' +
              '<td>' + fmt(r.b, r.fmt) + '</td>' +
              '<td>' + diffHtml(r.a, r.b, r.fmt) + '</td>' +
            '</tr>'
          )).join('') +
        '</tbody>';

      if (wrap) wrap.style.display = 'block';
    }

function updateProfessionalDashboard() {
  // declare ก่อน try{} เพื่อให้ทุก call เข้าถึงได้
  const selMonth = document.getElementById('primaryMonthSelect')?.value  || '';
  const cmpMonth = document.getElementById('compareMonthSelect')?.value  || '';

  try {
    if (typeof applyTypeLabels === 'function') applyTypeLabels();

    // ── Labels ──
    const lblP = document.getElementById('lblPrimaryMonth');
    const lblC = document.getElementById('lblCompMonth');
    if (lblP) lblP.textContent = selMonth || '—';
    if (lblC) lblC.textContent = cmpMonth || '—';

    // ── Primary KPI ──
    if (typeof updateKpiCards === 'function') updateKpiCards(selMonth);

    // ── Comparison KPI cards ──
    const wrap2 = document.getElementById('statsMonth2Wrap');
    const tF = document.getElementById('reportTypeFilter')?.value || 'All';
    const dF = document.getElementById('reportDeptFilter')?.value || 'All';
    const kpi1 = __computeKpiFromDcc(selMonth, tF, dF);

    if (cmpMonth && cmpMonth !== selMonth) {
      const kpi2 = __computeKpiFromDcc(cmpMonth, tF, dF);
      if (wrap2) wrap2.style.display = '';

      const setEl = (id, val, isPct) => {
        const el = document.getElementById(id);
        if (el) el.textContent = isPct ? val.toFixed(2) + '%' : Math.round(val).toLocaleString();
      };
      setEl('totalErrorsMonth2', kpi2.totalErr);
      setEl('totalUnitsMonth2',  kpi2.totalUnit);
      setEl('errorRateMonth2',   kpi2.errorRate, true);
      setEl('deptCountMonth2',   kpi2.activeInspectors);

      // Delta: comparison cards
      const delta = (a, b, lowerBetter, isPct) => {
        const d = a - b;
        if (d === 0) return '<span style="color:#6b7280">= เท่ากัน</span>';
        const up = d > 0, good = lowerBetter ? !up : up;
        const clr = good ? '#10b981' : '#ef4444';
        const abs = isPct ? Math.abs(d).toFixed(2)+'%' : Math.abs(Math.round(d)).toLocaleString();
        return '<span style="color:'+clr+';font-size:.82rem">'+(up?'▲+':'▼')+abs+' vs '+cmpMonth+'</span>';
      };
      const dErr  = document.getElementById('deltaErrors');
      const dUnit = document.getElementById('deltaUnits');
      const dRate = document.getElementById('deltaRate');
      const dDept = document.getElementById('deltaDept');
      if (dErr)  dErr.innerHTML  = delta(kpi1.totalErr,         kpi2.totalErr,         true,  false);
      if (dUnit) dUnit.innerHTML = delta(kpi1.totalUnit,        kpi2.totalUnit,         false, false);
      if (dRate) dRate.innerHTML = delta(kpi1.errorRate,        kpi2.errorRate,         true,  true);
      if (dDept) dDept.innerHTML = delta(kpi1.activeInspectors, kpi2.activeInspectors,  false, false);

      // Delta arrows บน primary cards
      const arrow = (a, b, lowerBetter) => {
        const d = a - b; if (d === 0) return '';
        const good = lowerBetter ? d < 0 : d > 0;
        const abs = Math.abs(d % 1 === 0 ? d : +d.toFixed(2));
        return '<span style="color:'+(good?'#10b981':'#ef4444')+';font-size:.8rem">'+(d>0?'▲':'▼')+' '+abs+'</span>';
      };
      const sc  = document.getElementById('errorCompare');
      const uc  = document.getElementById('unitCompare');
      const rc2 = document.getElementById('rateCompare');
      if (sc)  sc.innerHTML  = 'vs '+cmpMonth+' '+arrow(kpi1.totalErr,  kpi2.totalErr,  true);
      if (uc)  uc.innerHTML  = 'vs '+cmpMonth+' '+arrow(kpi1.totalUnit, kpi2.totalUnit, false);
      if (rc2) rc2.innerHTML = 'vs '+cmpMonth+' '+arrow(kpi1.errorRate, kpi2.errorRate, true);

    } else {
      if (wrap2) wrap2.style.display = 'none';
      ['errorCompare','unitCompare','rateCompare','deptCompare'].forEach(id => {
        const el = document.getElementById(id); if (el) el.innerHTML = '';
      });
    }

    // ── Charts ──
    // ── Charts — defer ด้วย requestAnimationFrame เพื่อให้ DOM visible ก่อน render
    const _selM = selMonth;
    requestAnimationFrame(function(){
      if (typeof renderProfessionalCharts === 'function') renderProfessionalCharts(_selM);
      if (typeof renderSummaryCharts       === 'function') renderSummaryCharts(_selM);
    });




    // ── MoM Delta Table — ต้องอยู่ใน try{} เพื่อ catch error ได้ ──
    if (typeof renderMoMTable === 'function') renderMoMTable(selMonth);

  } catch (e) {
    console.error('updateProfessionalDashboard error:', e);
  }
}


// ===== Dashboard Mode Controller =====
let dashboardMode = 'exec';
let advancedExpanded = false;

function setDashboardMode() {
  // Dashboard modes removed for production simplicity.
  // Keep as a no-op to avoid breaking old click handlers.
  try { if (typeof updateProfessionalDashboard === 'function') updateProfessionalDashboard(); } catch(e) {}
}


function _setChartVisible(canvasId, visible) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const wrap = c.closest('.chart-container') || c.parentElement;
  if (wrap) wrap.style.display = visible ? '' : 'none';
}


function toggleAdvancedCharts(forceState) {
  if (typeof forceState === 'boolean') {
    advancedExpanded = forceState;
  } else {
    advancedExpanded = !advancedExpanded;
  }
  applyDashboardMode();
  // Re-render when opening advanced (some charts may have been hidden)
  const summarySection = document.getElementById('reportSummary');
  if (advancedExpanded && summarySection && summarySection.style.display !== 'none') {
    updateProfessionalDashboard();
  }
}


function applyDashboardMode() {
  const filters = document.querySelector('.report-filters');
  if (filters) {
    // Executive: hide filters (simple view). Dept/Analyst: show filters.
    filters.style.display = (dashboardMode === 'exec') ? 'none' : '';
  }

  // Core charts: always meaningful
  const core = ['errorRateTrendProfChart','topDepartmentsChart'];

  // Advanced charts: deep dive / analyst
  const advanced = [
    'deptComparisonChart',
    'deptMatrixChart',
    'errorTypeChart',
    'unitVsErrorChart',
    'monthGrowthChart',
    'metricsComparisonChart',
    'errorTypeComparisonChart',
    'errorTrendChart',
    'errorRateChart',
    'completionChart'
  ];

  // Executive: core only
  // Dept head: core + optional advanced via button
  // Analyst: show everything by default
  const shouldShowAdvanced = (dashboardMode === 'analyst') || (dashboardMode === 'dept' && advancedExpanded);

  core.forEach(id => _setChartVisible(id, true));
  advanced.forEach(id => _setChartVisible(id, shouldShowAdvanced));

  // Toggle button visibility & label
  const wrap = document.getElementById('advToggleWrap');
  const btn = document.getElementById('btnToggleAdvanced');
  if (wrap) wrap.style.display = (dashboardMode === 'dept') ? '' : 'none';
  if (btn) btn.textContent = advancedExpanded ? 'ซ่อนกราฟเชิงลึก' : 'ดูกราฟเพิ่มเติม (Analyst)';

  // Gentle hint (not blocking)
  if (dashboardMode === 'dept') {
    const deptSel = document.getElementById('reportDeptFilter');
    if (deptSel && (deptSel.value === 'ALL' || !deptSel.value)) {
      setChartCaption('topDepartmentsChart', 'Tip: เลือก Department เพื่อดูมุมมองของแผนก และเปรียบเทียบได้ชัดขึ้น');
    }
  }
}



// MODULE 5: PROFESSIONAL CHARTS RENDERING (Part 1 of 2)

    // ========== PROFESSIONAL CHARTS RENDERING ==========
    
function renderProfessionalCharts(selectedMonth) {
  if (!reportData || !reportData.checked || !Array.isArray(reportData.checked.dccData)) return;

  const typeNow = (selectedTypeFilter && selectedTypeFilter !== 'ALL') ? selectedTypeFilter : 'Checklist';
  const deptNow = selectedDeptFilter || 'ALL';

  function normType(t){
    t = (t||'').toString().trim();
    if (t === 'PM/WI') return 'PMWI';
    return t;
  }
  function monthToKey(m){
    // m like "Jan-26"
    const mm = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
    const parts = (m||'').toString().split('-');
    if (parts.length !== 2) return 0;
    const mon = parts[0];
    const yy = parseInt(parts[1],10);
    const year = (yy < 100) ? (2000 + yy) : yy;
    const month = mm[mon] ?? 0;
    return new Date(year, month, 1).getTime();
  }

  const rows = reportData.checked.dccData.filter(r => {
    const m = (r[1]||'').toString().trim();
    const d = (r[6]||'').toString().trim();
    const t = normType(r[5]);  // r[5]=Type (PMWI/Checklist)
    if (!m) return false;
    if (typeNow !== 'ALL' && t !== typeNow) return false;
    if (deptNow !== 'ALL' && d !== deptNow) return false;
    return true;
  });

  // Build available months from filtered rows
  const monthSet = new Set(rows.map(r => (r[1]||'').toString().trim()).filter(Boolean));
  const months = Array.from(monthSet).sort((a,b)=>monthToKey(a)-monthToKey(b));
  const last6Months = months.slice(-6);

  // If no data for this filter, show placeholders
  if (!last6Months.length) {
    showChartNoData('errorRateTrendProfChart', 'No data for this filter.', true);
    showChartNoData('topDepartmentsChart', 'No data for this filter.', true);
    showChartNoData('deptComparisonChart', 'No data for this filter.', true);
    return;
  }

  // ===== 1) Error Trend (Last 6 months) =====
  _safeDestroy(errorRateTrendProfChart);

  const errorRates = last6Months.map(mKey => {
    let unit=0, err=0;
    rows.forEach(r=>{
      if ((r[1]||'').toString().trim() !== mKey) return;
      unit += _toNum(r[10]);
      err  += _toNum(r[11]);
    });
    return unit>0 ? +(err/unit*100).toFixed(3) : 0;
  });

  const movingAvg = calculateMovingAverage(errorRates, 3);

  setChartTitle('errorRateTrendProfChart', 'Error Rate Trend (' + typeNow + ') - Last 6 Months');
  setChartCaption('errorRateTrendProfChart',
    'Shows Error Rate = Errors / Unit Checked for the selected Type' + (deptNow!=='ALL' ? (' and Department = '+deptNow) : '') +
    '. If history is limited, only available months are shown.'
  );

  const maxRate = Math.max(...errorRates.filter(v => v > 0), 0.1);
  const ctxTrend = document.getElementById('errorRateTrendProfChart')?.getContext('2d');
  if (!ctxTrend) return;
  showChartWithData('errorRateTrendProfChart');
  errorRateTrendProfChart = createChart(ctxTrend, {
    type: 'line',
    data: {
      labels: last6Months,
      datasets: [
        { label: 'Error Rate (%)', data: errorRates,
          borderColor: '#1d4ed8', backgroundColor: 'rgba(29,78,216,0.12)',
          borderWidth: 3, pointRadius: 6, pointBackgroundColor: '#1d4ed8',
          fill: true, tension: 0.35 },
        { label: 'Trend (3-Month MA)', data: movingAvg,
          borderColor: '#f59e0b', backgroundColor: 'transparent',
          borderWidth: 2.5, pointRadius: 0, tension: 0.4, borderDash: [4,3] },
        { label: 'Target (2%)', data: last6Months.map(()=>2),
          borderColor: '#ef4444', backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 0, borderDash: [8,5] }
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      interaction: { mode:'index', intersect:false },
      scales:{
        y:{ beginAtZero:true, suggestedMax: Math.max(maxRate*1.5, 1),
            ticks:{ callback:v=>(+v).toFixed(2)+'%' },
            title:{ display:true, text:'Error Rate (%)' } }
      },
      plugins:{ tooltip:{ callbacks:{ label:(c)=> c.dataset.label+': '+(+c.raw).toFixed(3)+'%' } } }
    }
  });

  // ===== 2) Top Departments by Error Rate (selected month) =====
  _safeDestroy(topDepartmentsChart);

  // choose month: selectedMonth if matches filter else latest month
  const monthForRank = (selectedMonth && monthSet.has(selectedMonth)) ? selectedMonth : last6Months[last6Months.length-1];

  const rowsMonth = rows.filter(r => (r[1]||'').toString().trim() === monthForRank);
  const isAllDept = (d) => ['All','DC All','DC all','all'].includes((d||'').trim());
  const deptAgg = _groupAgg(rowsMonth.filter(r => !isAllDept(r[6])), r=>r[6]);

  setChartTitle('topDepartmentsChart', 'Top Departments (' + typeNow + ') - Error Rate');
  setChartCaption('topDepartmentsChart',
    'Ranks departments by Error Rate = Errors / Unit Checked for ' + monthForRank + '. Hover for Unit/Plan/Coverage.'
  );

  const ctxDept = document.getElementById('topDepartmentsChart')?.getContext('2d');
  if (ctxDept) {
    if (!deptAgg.length) {
      showChartNoData('topDepartmentsChart', 'No department data for ' + monthForRank + '.', true);
    } else {
      const deptTop = _topN(deptAgg.filter(x=>x.unit>0), 10, x=>x.errRate);
      const vals = deptTop.map(x=>x.errRate*100);
      const maxV = Math.max.apply(null, vals);
      if (!isFinite(maxV)) {
        showChartNoData('topDepartmentsChart', 'No data for ' + monthForRank + '.');
      } else {
        // maxV==0 = ทุก dept มี 0% error → ยังแสดง chart เพื่อ transparency
        const displayMax = maxV > 0 ? maxV : 1;
        const barColors = deptTop.map(x => {
          const r = x.errRate * 100;
          if (r >= 10) return '#dc2626';
          if (r >= 5)  return '#f59e0b';
          return '#1d4ed8';
        });
        topDepartmentsChart = createChart(ctxDept, {
          type:'bar',
          data:{ labels: deptTop.map(x=>x.key), datasets:[{
            label:'Error Rate (%)', data: vals,
            backgroundColor: barColors, borderColor: barColors,
            borderWidth: 0, borderRadius: 5
          }] },
          options:{
            responsive:true, maintainAspectRatio:false,
            scales:{ y:{ beginAtZero:true, suggestedMax: Math.max(1, displayMax*1.5),
              ticks:{ callback:v=> (+v).toFixed(displayMax<0.2?2:1)+'%' },
              title:{ display:true, text:'Error Rate (%)' } } },
            plugins:{
              legend:{ display:false },
              tooltip:{ callbacks:{
                label:(c)=> 'Error Rate: '+(+c.raw).toFixed(3)+'%',
                afterLabel:(c)=>{
                  const d=deptTop[c.dataIndex];
                  const cov = d.plan>0 ? (d.unit/d.plan*100).toFixed(1)+'%' : 'N/A';
                  return ['Unit Checked: '+d.unit.toFixed(0),'Errors: '+d.err.toFixed(0),'Plan: '+d.plan.toFixed(0),'Coverage: '+cov];
                }
              } }
            }
          }
        });
      }
    }
  }

  // ===== 3) Coverage vs Error (Scatter) (selected month) =====
  _safeDestroy(deptComparisonChart);

  setChartTitle('deptComparisonChart', 'Department Coverage vs Error (' + typeNow + ')');
  setChartCaption('deptComparisonChart',
    'Each dot = department. X = Coverage (%), Y = Error Rate (%). Use to spot high-coverage but high-error departments.'
  );

  const ctxCmp = document.getElementById('deptComparisonChart')?.getContext('2d');
  if (ctxCmp) {
    const hasPlan = deptAgg.some(x => x.plan > 0);
    const pts = deptAgg.filter(x => x.unit > 0).map(x => ({
      x: hasPlan && x.plan > 0 ? +(x.unit/x.plan*100).toFixed(2) : +x.unit.toFixed(0),
      y: +(x.errRate*100).toFixed(3),
      dept: x.key, unit: x.unit, plan: x.plan, err: x.err, hasPlan
    }));
    const xLabel = hasPlan ? 'Coverage (%)' : 'Units Checked';
    setChartCaption('deptComparisonChart',
      hasPlan
        ? 'X = Coverage %, Y = Error Rate%. จุดมุมบนขวา = ตรวจเยอะแต่ error สูง = ต้องแก้ด่วน'
        : 'X = Units Checked (ไม่มี Plan), Y = Error Rate%. จุดมุมขวาบน = volume สูง + error สูง');
    if (!pts.length) {
      showChartNoData('deptComparisonChart', 'No unit check data for ' + monthForRank + '.', true);
    } else {
      showChartWithData('deptComparisonChart');
      const isAll = (deptNow === 'ALL');
      const others   = isAll ? pts : pts.filter(p => p.dept !== deptNow);
      const selected = isAll ? []  : pts.filter(p => p.dept === deptNow);
      deptComparisonChart = createChart(ctxCmp, {
        type:'scatter',
        data:{
          datasets:[
            { label: xLabel, data: others,
              backgroundColor: 'rgba(29,78,216,0.65)', borderColor: '#1d4ed8',
              pointRadius: 7, pointHoverRadius: 9 },
            ...(selected.length ? [{ label: 'เลือก: '+deptNow, data: selected,
              backgroundColor: '#ef4444', borderColor: '#dc2626',
              pointRadius: 10, pointStyle: 'star' }] : [])
          ]
        },
        options:{
          responsive:true, maintainAspectRatio:false,
          scales:{
            x:{ title:{ display:true, text: xLabel }, min:0,
                ...(hasPlan ? { max:100 } : {}),
                ticks:{ callback: v => hasPlan ? v+'%' : v } },
            y:{ title:{ display:true, text:'Error Rate (%)' }, beginAtZero:true,
                ticks:{ callback: v => (+v).toFixed(3)+'%' } }
          },
          plugins:{
            tooltip:{ callbacks:{
              label:(c)=>{ const p=c.raw; return (p.dept||'')+': '+xLabel+' '+(hasPlan?p.x+'%':p.x)+' | Error '+p.y+'%'; },
              afterLabel:(c)=>{ const p=c.raw; return ['Unit: '+(p.unit||0).toFixed(0),'Errors: '+(p.err||0).toFixed(0),'Plan: '+(p.plan||0).toFixed(0)]; }
            }}
          }
        }
      });
    }
  }
}


function _getDccRowsFiltered(month, type, deptFilterFn) {
  const rows = (reportData && reportData.checked && reportData.checked.dccData) ? reportData.checked.dccData : [];
  return rows.filter(r => {
    const m = (r[1] || '').toString();
    const t = (r[5] || '').toString();  // r[5]=Type (PMWI/Checklist)
    const d = (r[6] || '').toString();
    if (typeof selectedDeptFilter !== 'undefined' && selectedDeptFilter !== 'ALL' && d !== selectedDeptFilter) return false;
    if (month && m !== month) return false;
    if (type && t !== type) return false;
    if (deptFilterFn && !deptFilterFn(d)) return false;
    return true;
  });
}

function _groupAgg(rows, keyFn) {
  const map = new Map();
  rows.forEach(r => {
    const key = (keyFn(r) || '—').toString().trim() || '—';
    const plan = _toNum(r[9]);     // Plan check (Target)
    const unit = _toNum(r[10]);    // Unit check (Actual)
    const err  = _toNum(r[11]);    // Err.Amount
    const cur = map.get(key) || { key, plan:0, unit:0, err:0 };
    cur.plan += plan;
    cur.unit += unit;
    cur.err  += err;
    map.set(key, cur);
  });
  // derived metrics
  return Array.from(map.values()).map(o => {
    const coverage = o.plan > 0 ? (o.unit / o.plan) : 0;
    const errRate = o.unit > 0 ? (o.err / o.unit) : 0;
    const gap = Math.max(0, o.plan - o.unit);
    const over = Math.max(0, o.unit - o.plan);
    return { ...o, coverage, errRate, gap, over };
  });
}

function _topN(arr, n, sortKeyFn) {
  return arr.slice().sort((a,b) => (sortKeyFn(b) - sortKeyFn(a))).slice(0, n);
}

function _parseMonthKeyToIndex(key) {
  // key format like "Jan-26"
  const parts = (key || '').toString().split('-');
  if (parts.length !== 2) return -1;
  const m = parts[0].trim();
  const y2 = parseInt(parts[1], 10);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const mi = months.indexOf(m);
  if (mi < 0 || isNaN(y2)) return -1;
  const y = 2000 + y2;
  return y * 12 + mi;
}

function _lastNMonths(n) {
  if (!reportData || !reportData.checked || !reportData.checked.dccData) return [];
  const monthsSet = new Set();
  reportData.checked.dccData.forEach(r => { if (r[1]) monthsSet.add(r[1].toString()); });
  return Array.from(monthsSet)
    .filter(k => _parseMonthKeyToIndex(k) >= 0)
    .sort((a,b) => _parseMonthKeyToIndex(a) - _parseMonthKeyToIndex(b))
    .slice(-n);
}

function _calcMonthlySeries(type, deptPredicate, months) {
  const series = months.map(m => {
    const rows = _getDccRowsFiltered(m, type, deptPredicate);
    let unit = 0, err = 0, plan = 0;
    rows.forEach(r => {
      plan += _toNum(r[9]);
      unit += _toNum(r[10]);
      err  += _toNum(r[11]);
    });
    // If no plan: coverage = null (don't plot) to avoid fake 0% crash
    const coverage = plan > 0 ? +(unit/plan*100).toFixed(2) : (unit > 0 ? null : null);
    const errRate = unit > 0 ? +(err/unit*100).toFixed(3) : 0;
    return { month:m, plan, unit, err, coverage, errRate };
  });
  return series;
}

function _safeDestroy(chartVar) {
  try {
    if (chartVar && typeof chartVar.destroy === 'function') chartVar.destroy();
  } catch(e) {}
}


function __ensureValidSelectedMonth() {
  try {
    const byMonth = reportData?.summary?.byMonth || {};
    const keys = Object.keys(byMonth);
    if (!keys.length) return;
    // sort keys by time
    keys.sort((a,b)=>_parseMonthKeyToIndex(a)-_parseMonthKeyToIndex(b));
    const latest = keys[keys.length-1];
    if (!selectedMonth || !byMonth[selectedMonth]) {
      selectedMonth = latest;
      const m1 = document.getElementById('primaryMonthSelect');
      if (m1) m1.value = latest;
    }
  } catch(e) {}
}


function __autoSelectLatestMonthWithData() {
  try {
    const byMonth = reportData?.summary?.byMonth || {};
    const keys = Object.keys(byMonth);
    if (!keys.length) return;
    keys.sort((a,b)=>_parseMonthKeyToIndex(a)-_parseMonthKeyToIndex(b));
    let best = null;
    for (let i = keys.length-1; i>=0; i--) {
      const k = keys[i];
      const m = byMonth[k] || {};
      const unit = Number(m.totalUnit || 0);
      if (unit > 0) { best = k; break; }
    }
    if (!best) best = keys[keys.length-1];
    if (!selectedMonth || !byMonth[selectedMonth] || Number(byMonth[selectedMonth]?.totalUnit||0) === 0) {
      selectedMonth = best;
      const sel = document.getElementById('primaryMonthSelect');
      if (sel) sel.value = best;
    }
  } catch(e) {}
}


function __updateKpiCardsFromSummary(monthKey) {
  try {
    const m = reportData?.summary?.byMonth?.[monthKey];
    if (!m) return;
    const totalErr = Number(m.totalError || 0);
    const totalUnit = Number(m.totalUnit || 0);
    const inspectors = Number(m.activeInspectors || m.inspectorCount || 0);
    const rate = totalUnit > 0 ? (totalErr / totalUnit * 100) : 0;

    const elErr = document.getElementById('totalErrorsMonth1');
    if (elErr) elErr.textContent = totalErr.toLocaleString();
    const elUnit = document.getElementById('totalUnitsMonth1');
    if (elUnit) elUnit.textContent = totalUnit.toLocaleString();
    const elRate = document.getElementById('errorRateMonth1');
    if (elRate) elRate.textContent = rate.toFixed(2) + '%';
    const elIns = document.getElementById('activeInspectors1');  // FIX #2: was 'activeInspectorsMonth1'
    if (elIns) elIns.textContent = inspectors.toLocaleString();
  } catch(e) {
    console.warn("KPI update failed:", e);
  }
}


function __computeKpiFromDcc(monthKey, typeFilter, deptFilter) {
  const rows = (reportData?.checked?.dccData || []);
  let totalUnit = 0;
  let totalErr = 0;
  const inspectors = new Set();

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i] || [];
    const m = (r[1] || '').toString().trim();
    if (monthKey && m !== monthKey) continue;

    const dept = (r[6] || '').toString().trim();
    const type = (r[5] || '').toString().trim();  // r[5]=Type (PMWI/Checklist)

    const _isAll = (v) => ['All','DC all','DC All','all','ALL'].includes((v||'').trim());
    if (typeFilter && !_isAll(typeFilter) && type !== typeFilter) continue;
    if (deptFilter && !_isAll(deptFilter) && dept !== deptFilter) continue;

    const unit = _toNum(r[10], 0);  // FIX #1: Unit Check (was r[11])
    const err  = _toNum(r[11], 0);  // FIX #1: Err Unit (was r[12])
    totalUnit += unit;
    totalErr  += err;

    const insp = (r[21] || '').toString().trim();
    if (insp) inspectors.add(insp);
  }

  const rate = totalUnit > 0 ? (totalErr / totalUnit) * 100 : 0;
  return {
    totalUnit,
    totalErr,
    errorRate: rate,
    activeInspectors: inspectors.size
  };
}


function setKpiValue(elId, val, isPercent) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (isPercent) {
    el.textContent = `${(Math.round((_toNum(val,0))*100)/100).toFixed(2)}%`;
  } else {
    el.textContent = `${Math.round(_toNum(val,0))}`;
  }
}
function updateKpiCards(monthKey) {
  const typeFilter = (document.getElementById('reportTypeFilter')?.value || 'All').toString();
  const deptFilter = (document.getElementById('reportDeptFilter')?.value || 'All').toString();
  const kpi = __computeKpiFromDcc(monthKey, typeFilter, deptFilter);
  // FIX #6: use actual HTML element IDs (kpi* IDs do not exist in DOM)
  const elErr = document.getElementById('totalErrorsMonth1');
  if (elErr) elErr.textContent = kpi.totalErr.toLocaleString();
  const elUnit = document.getElementById('totalUnitsMonth1');
  if (elUnit) elUnit.textContent = kpi.totalUnit.toLocaleString();
  const elRate = document.getElementById('errorRateMonth1');
  if (elRate) elRate.textContent = kpi.errorRate.toFixed(2) + '%';
  const elIns = document.getElementById('activeInspectors1');
  if (elIns) elIns.textContent = kpi.activeInspectors.toLocaleString();
}


    // ============================================================
    // AREA TREND — Data Analysis & Improvement Dashboard
    // Check Area sheet column mapping (0-indexed):
    // [0]=Date [1]=Area [2]=Location [3]=Problem
    // [4]=Art1 [5]=Desc1 [6]=QTY-1 [7]=Art2 [8]=Desc2 [9]=QTY-2
    // [10]=Image-1(K) [11]=Image-2(L) [12]=Image-3(M) [13]=Image-4(N)
    // [14]=Remark [15]=Inspector
    // Error count = 1 row = 1 error at that Location
    // ============================================================
    let _aC = {};

    function _getAreaRows() {
      if (!reportData || !reportData.areaData || !Array.isArray(reportData.areaData)) return [];
      return reportData.areaData.filter(r => Array.isArray(r) && r[0]);
    }
    function _aDate(r)    { return (r[0]||'').toString().trim(); }
    function _aArea(r)    { return (r[1]||'').toString().trim() || 'Unknown'; }
    function _aLoc(r)     { return (r[2]||'').toString().trim() || '-'; }
    function _aProb(r)    { return (r[3]||'').toString().trim() || 'Other'; }
    function _aQty(r)     { return Math.max(0, parseInt(r[6])||0); }
    function _aPhotos(r)  {
      return [r[10],r[11],r[12],r[13]].filter(v => v && String(v).trim().startsWith('http'));
    }

    // "20/02/2026" or "2026-02-02" → "Feb-26"
    function _aMk(ds) {
      if (!ds) return '';
      const mn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let d;
      const s = ds.toString().trim();
      // dd/MM/yyyy
      const p = s.split('/');
      if (p.length === 3 && p[2].length === 4) {
        d = new Date(parseInt(p[2]), parseInt(p[1])-1, parseInt(p[0]));
      } else {
        d = new Date(s);
      }
      if (isNaN(d.getTime())) return s;
      return mn[d.getMonth()] + '-' + String(d.getFullYear()).slice(2);
    }

    function _aMkSort(mk) {
      const mm={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
      const p = mk.split('-');
      return (2000 + parseInt(p[1]||0)) * 12 + (mm[p[0]]||0);
    }

    function _destroyAC(key) {
      try { if(_aC[key]) { _aC[key].destroy(); delete _aC[key]; } } catch(e) {}
    }

    function _fillSel(id, arr, extraFirst) {
      const el = document.getElementById(id); if (!el) return;
      const prev = el.value;
      el.innerHTML = '';
      if (extraFirst) extraFirst.forEach(o => el.add(new Option(o.t, o.v)));
      arr.forEach(v => el.add(new Option(v, v)));
      if ([...el.options].some(o => o.value === prev)) el.value = prev;
    }

    function renderAreaTrend() {
      const all = _getAreaRows();
      const kpiEl = document.getElementById('areaTrendKpiBar');

      if (!all.length) {
        if (kpiEl) kpiEl.innerHTML =
          '<div class="col-12"><div class="alert alert-info mb-0">' +
          '<i class="bi bi-info-circle me-2"></i><strong>ยังไม่มีข้อมูล Area Inspection</strong> — ' +
          'กรุณา Refresh Data และตรวจสอบว่า Apps Script ส่ง <code>areaData</code> ใน getReportData()</div></div>';
        return;
      }

      // ── สร้าง month list จากข้อมูลจริง (dd/MM/yyyy → Feb-26) ────────
      const allMonthKeys = [...new Set(all.map(r => _aMk(_aDate(r))).filter(Boolean))]
                            .sort((a,b) => _aMkSort(a) - _aMkSort(b));

      // Populate month dropdowns
      _fillSel('areaTrendPrimaryMonth', allMonthKeys, [{t:'ทุกเดือน', v:'ALL'}]);
      _fillSel('areaTrendCompMonth',    allMonthKeys, [{t:'— ไม่เปรียบเทียบ —', v:'NONE'}]);
      _fillSel('areaTrendAreaFilter',   [...new Set(all.map(_aArea))].sort(),   [{t:'ทั้งหมด', v:'ALL'}]);
      _fillSel('areaTrendLocFilter',    [...new Set(all.map(_aLoc).filter(v=>v&&v!=='-'))].sort(), [{t:'ทั้งหมด', v:'ALL'}]);
      _fillSel('areaTrendTypeFilter',   [...new Set(all.map(_aProb))].sort(),   [{t:'ทั้งหมด', v:'ALL'}]);

      const fPrimary = document.getElementById('areaTrendPrimaryMonth')?.value || 'ALL';
      const fComp    = document.getElementById('areaTrendCompMonth')?.value    || 'NONE';
      const fArea    = document.getElementById('areaTrendAreaFilter')?.value   || 'ALL';
      const fLoc     = document.getElementById('areaTrendLocFilter')?.value    || 'ALL';
      const fProb    = document.getElementById('areaTrendTypeFilter')?.value   || 'ALL';
      const nM       = parseInt(document.getElementById('areaTrendMonthRange')?.value || '3');

      // ── Base filter (Area/Location/Problem) ────────────────────────
      const baseRows = all.filter(r =>
        (fArea === 'ALL' || _aArea(r) === fArea) &&
        (fLoc  === 'ALL' || _aLoc(r)  === fLoc)  &&
        (fProb === 'ALL' || _aProb(r) === fProb)
      );

      // ── Primary rows ────────────────────────────────────────────────
      const primRows = fPrimary === 'ALL'
        ? baseRows.filter(r => {
            const mk = _aMk(_aDate(r));
            return allMonthKeys.slice(-nM).includes(mk);
          })
        : baseRows.filter(r => _aMk(_aDate(r)) === fPrimary);

      // ── Comparison rows ─────────────────────────────────────────────
      const hasComp = fComp !== 'NONE';
      const compRows = hasComp
        ? baseRows.filter(r => _aMk(_aDate(r)) === fComp)
        : [];

      // Trend months (for trend chart)
      const trendMonths = fPrimary === 'ALL'
        ? allMonthKeys.slice(-nM)
        : (hasComp
            ? [fComp, fPrimary].sort((a,b) => _aMkSort(a)-_aMkSort(b))
            : [fPrimary]);

      // Comparison banner
      const banner   = document.getElementById('areaCompBanner');
      const compLabel= document.getElementById('areaCompLabel');
      if (banner) banner.style.display = hasComp ? 'flex' : 'none';
      if (compLabel && hasComp) {
        const diff = primRows.length - compRows.length;
        const diffStr = diff > 0 ? '▲+'+diff+' cases' : diff < 0 ? '▼'+diff+' cases' : '= เท่ากัน';
        const diffClr = diff > 0 ? '#dc2626' : diff < 0 ? '#10b981' : '#6b7280';
        compLabel.innerHTML =
          '<b style="color:#1d4ed8">' + (fPrimary==='ALL'?'ทุกเดือน':fPrimary) + '</b>' +
          ' <span style="color:#6b7280">vs</span> ' +
          '<b style="color:#7c3aed">' + fComp + '</b>' +
          ' &nbsp;→&nbsp; ' +
          '<b style="color:'+diffClr+'">' + diffStr + '</b>' +
          ' &nbsp;|&nbsp; Primary: <b>' + primRows.length + '</b> cases' +
          ' &nbsp;|&nbsp; Comparison: <b>' + compRows.length + '</b> cases';
      }

      const pal = ['#1d4ed8','#dc2626','#059669','#f59e0b','#7c3aed','#0891b2','#d97706','#be185d','#065f46','#92400e'];

      // ── KPI Bar ────────────────────────────────────────────────────
      const totalPhotos = primRows.reduce((s,r) => s+_aPhotos(r).length, 0);
      const totalQty    = primRows.reduce((s,r) => s+_aQty(r), 0);
      const areasHit    = new Set(primRows.map(_aArea)).size;
      const locsHit     = new Set(primRows.map(_aLoc)).size;
      const probMap     = {};
      primRows.forEach(r => { const p=_aProb(r); probMap[p]=(probMap[p]||0)+1; });
      const topProb = Object.entries(probMap).sort((a,b)=>b[1]-a[1])[0];

      // Delta vs comparison
      const delta    = hasComp ? primRows.length - compRows.length : null;
      const deltaClr = delta===null?'#6b7280':delta<=0?'#10b981':'#ef4444';
      const deltaStr = delta===null?'—':(delta>0?'▲+':'▼')+Math.abs(delta);
      const vsLabel  = hasComp ? 'vs '+fComp : (fPrimary==='ALL'?'ทุกเดือน':fPrimary);

      if (kpiEl) {
        // ── Primary KPI cards (always shown) ─────────────────────────
        const primCards = [
          {icon:'bi-exclamation-triangle-fill', color:'#ef4444', label:'Issues ('+(fPrimary==='ALL'?'All':fPrimary)+')', val:primRows.length, sub:primRows.length+' cases'},
          {icon:'bi-geo-alt-fill',              color:'#1d4ed8', label:'Areas',       val:new Set(primRows.map(_aArea)).size,  sub:'areas affected'},
          {icon:'bi-pin-map-fill',              color:'#0891b2', label:'Locations',   val:new Set(primRows.map(_aLoc)).size,   sub:'locations'},
          {icon:'bi-boxes',                     color:'#7c3aed', label:'QTY สินค้า',  val:primRows.reduce((s,r)=>s+_aQty(r),0), sub:'units'},
          {icon:'bi-camera-fill',               color:'#059669', label:'Photos',      val:primRows.reduce((s,r)=>s+_aPhotos(r).length,0), sub:'evidence'},
          {icon:'bi-bug-fill',                  color:'#f59e0b', label:'Top Problem', val:topProb?topProb[1]:'—', sub:topProb?(topProb[0].length>16?topProb[0].slice(0,16)+'…':topProb[0]):''},
        ].map(k =>
          '<div class="col-6 col-md-2"><div class="stat-card" style="padding:10px 12px">'+
          '<div style="font-size:1.2rem;color:'+k.color+'"><i class="bi '+k.icon+'"></i></div>'+
          '<div style="font-size:1.3rem;font-weight:800;color:'+k.color+'">'+k.val+'</div>'+
          '<div style="font-size:.65rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)">'+k.label+'</div>'+
          '<div style="font-size:.62rem;color:var(--text-muted)">'+k.sub+'</div>'+
          '</div></div>'
        ).join('');

        // ── Comparison cards (แสดงเมื่อเลือก Comparison month) ────────
        let compCards = '';
        if (hasComp) {
          const compTopProbMap = {};
          compRows.forEach(r => { const p=_aProb(r); compTopProbMap[p]=(compTopProbMap[p]||0)+1; });
          const compTopProb = Object.entries(compTopProbMap).sort((a,b)=>b[1]-a[1])[0];
          const diff     = primRows.length - compRows.length;
          const diffClr  = diff < 0 ? '#10b981' : diff > 0 ? '#ef4444' : '#6b7280';
          const diffStr  = diff > 0 ? '▲+'+diff+' cases' : diff < 0 ? '▼'+Math.abs(diff)+' cases' : '= เท่ากัน';
          const diffIcon = diff < 0 ? 'bi-arrow-down-circle-fill' : diff > 0 ? 'bi-arrow-up-circle-fill' : 'bi-dash-circle-fill';

          compCards =
            '<div class="col-12"><hr class="my-2"><div class="d-flex align-items-center gap-2 mb-2">'+
            '<span style="font-size:.75rem;font-weight:700;text-transform:uppercase;color:#7c3aed">'+
            '<i class="bi bi-calendar2-range me-1"></i>Comparison Month: '+fComp+'</span>'+
            '</div></div>'+
            [
              {icon:'bi-exclamation-triangle-fill', color:'#7c3aed', label:'Issues ('+fComp+')',  val:compRows.length, sub:'cases'},
              {icon:'bi-geo-alt-fill',              color:'#7c3aed', label:'Areas',               val:new Set(compRows.map(_aArea)).size, sub:'areas'},
              {icon:'bi-pin-map-fill',              color:'#7c3aed', label:'Locations',           val:new Set(compRows.map(_aLoc)).size,  sub:'locations'},
              {icon:'bi-boxes',                     color:'#7c3aed', label:'QTY สินค้า',          val:compRows.reduce((s,r)=>s+_aQty(r),0), sub:'units'},
              {icon:diffIcon,                       color:diffClr,   label:'Delta vs Primary',    val:diffStr, sub:(fPrimary==='ALL'?'All':fPrimary)+' vs '+fComp},
              {icon:'bi-bug-fill',                  color:'#7c3aed', label:'Top Problem',         val:compTopProb?compTopProb[1]:'—', sub:compTopProb?(compTopProb[0].length>16?compTopProb[0].slice(0,16)+'…':compTopProb[0]):''},
            ].map(k =>
              '<div class="col-6 col-md-2"><div class="stat-card" style="padding:10px 12px;border:2px solid #ede9fe">'+
              '<div style="font-size:1.2rem;color:'+k.color+'"><i class="bi '+k.icon+'"></i></div>'+
              '<div style="font-size:1.3rem;font-weight:800;color:'+k.color+'">'+k.val+'</div>'+
              '<div style="font-size:.65rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)">'+k.label+'</div>'+
              '<div style="font-size:.62rem;color:var(--text-muted)">'+k.sub+'</div>'+
              '</div></div>'
            ).join('');
        }

        kpiEl.innerHTML = primCards + compCards;
      }

      // ── Chart 1: Pareto — Top Areas (primary + comparison overlay) ──
      const areaCountP = {}, areaCountC = {};
      primRows.forEach(r => { const a=_aArea(r); areaCountP[a]=(areaCountP[a]||0)+1; });
      compRows.forEach(r => { const a=_aArea(r); areaCountC[a]=(areaCountC[a]||0)+1; });
      const allAreas   = [...new Set([...Object.keys(areaCountP), ...Object.keys(areaCountC)])];
      const areaSorted = allAreas.sort((a,b)=>(areaCountP[b]||0)-(areaCountP[a]||0));
      const aValsP     = areaSorted.map(a => areaCountP[a]||0);
      const aValsC     = areaSorted.map(a => areaCountC[a]||0);
      const aTotal     = aValsP.reduce((s,v)=>s+v,0);
      let cumul=0;
      const aCumul = aValsP.map(v => { cumul+=v; return aTotal>0 ? +((cumul/aTotal)*100).toFixed(1) : 0; });
      const aBarColors = aValsP.map((_,i) => i<3?'#dc2626':(i<6?'#f59e0b':'#1d4ed8'));

      _destroyAC('pareto');
      const ctxP = document.getElementById('areaParetoChart')?.getContext('2d');
      if (ctxP) {
        const paretoDS = [
          {type:'bar',  label:'Primary'+(fPrimary!=='ALL'?' ('+fPrimary+')':''), data:aValsP, backgroundColor:aBarColors, borderRadius:4, borderWidth:0, order:3, yAxisID:'y'},
          {type:'line', label:'Cumulative %', data:aCumul, borderColor:'#374151', borderWidth:2, pointRadius:3, fill:false, tension:0.3, order:1, yAxisID:'y1'},
        ];
        if (hasComp) {
          paretoDS.splice(1,0, {type:'bar', label:'Comparison ('+fComp+')', data:aValsC, backgroundColor:'rgba(124,58,237,0.45)', borderRadius:4, borderWidth:0, order:2, yAxisID:'y'});
        }
        _aC['pareto'] = createChart(ctxP, {
          type:'bar', data:{labels:areaSorted, datasets:paretoDS},
          options:{responsive:true,maintainAspectRatio:false,
            scales:{
              y:{beginAtZero:true,ticks:{stepSize:1},title:{display:true,text:'Cases'}},
              y1:{position:'right',min:0,max:100,ticks:{callback:v=>v+'%'},grid:{drawOnChartArea:false}}
            },
            plugins:{legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}},
              tooltip:{callbacks:{label:c=>c.dataset.label+': '+(c.datasetIndex===paretoDS.length-1?c.raw+'%':c.raw+' cases')}}}
          }
        });
      }

      // ── Chart 2: Trend — Issues per Area Monthly ─────────────────
      const top5Areas = areaSorted.slice(0,5);
      const trendDS_prim = top5Areas.map((a,i) => ({
        label: a+(hasComp?' ('+( fPrimary==='ALL'?'All':fPrimary)+')':''),
        data: trendMonths.map(m => primRows.filter(r=>_aArea(r)===a&&_aMk(_aDate(r))===m).length),
        borderColor:pal[i], backgroundColor:'transparent', borderWidth:2.5,
        pointRadius:5, pointBackgroundColor:pal[i], tension:0.35
      }));
      const trendDS = [...trendDS_prim];
      if (hasComp) {
        top5Areas.forEach((a,i) => {
          trendDS.push({
            label:a+' ('+fComp+')', data:trendMonths.map(m=>compRows.filter(r=>_aArea(r)===a&&_aMk(_aDate(r))===m).length),
            borderColor:pal[i], backgroundColor:'transparent', borderWidth:1.5,
            borderDash:[5,4], pointRadius:3, pointBackgroundColor:pal[i], tension:0.35
          });
        });
      }
      _destroyAC('trend');
      const ctxT = document.getElementById('areaTrendMonthlyChart')?.getContext('2d');
      if (ctxT) _aC['trend'] = createChart(ctxT, {
        type:'line', data:{labels:trendMonths, datasets:trendDS},
        options:{responsive:true,maintainAspectRatio:false,
          interaction:{mode:'index',intersect:false},
          scales:{y:{beginAtZero:true,ticks:{stepSize:1},title:{display:true,text:'Cases'}}},
          plugins:{legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}},
            tooltip:{callbacks:{title:t=>'Month: '+t[0].label}}}
        }
      });

      // ── Chart 3: Problem Pareto — Primary vs Comparison ──────────
      const probMapC = {};
      compRows.forEach(r => { const p=_aProb(r); probMapC[p]=(probMapC[p]||0)+1; });
      const allProbs   = [...new Set([...Object.keys(probMap),...Object.keys(probMapC)])];
      const probSorted = allProbs.sort((a,b)=>(probMap[b]||0)-(probMap[a]||0));
      _destroyAC('probPareto');
      const ctxPP = document.getElementById('areaProblemParetoChart')?.getContext('2d');
      if (ctxPP) {
        if (hasComp) {
          // Grouped bar เมื่อเปรียบเทียบ
          _aC['probPareto'] = createChart(ctxPP, {
            type:'bar',
            data:{labels:probSorted, datasets:[
              {label:'Primary ('+(fPrimary==='ALL'?'All':fPrimary)+')', data:probSorted.map(p=>probMap[p]||0), backgroundColor:'#1d4ed8', borderRadius:4},
              {label:'Comparison ('+fComp+')', data:probSorted.map(p=>probMapC[p]||0), backgroundColor:'rgba(124,58,237,0.6)', borderRadius:4}
            ]},
            options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',
              scales:{x:{beginAtZero:true,ticks:{stepSize:1}}},
              plugins:{legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}}}
            }
          });
        } else {
          // Doughnut ปกติ
          _aC['probPareto'] = createChart(ctxPP, {
            type:'doughnut',
            data:{labels:probSorted, datasets:[{data:probSorted.map(p=>probMap[p]||0), backgroundColor:pal, borderWidth:2, borderColor:'#fff'}]},
            options:{responsive:true,maintainAspectRatio:false,cutout:'50%',
              plugins:{legend:{position:'right',labels:{font:{size:10},boxWidth:10}},
                tooltip:{callbacks:{label:c=>c.label+': '+c.raw+' ('+( primRows.length>0?((c.raw/primRows.length)*100).toFixed(1):0)+'%)'}}}
            }
          });
        }
      }

      // ── Chart 4: Heatmap — Area × Location (คิด error by Location) ─
      // เปลี่ยนจาก Area×Problem → Area×Location เพราะ 1 row = 1 error ที่ Location นั้น
      const locsByArea = {};
      primRows.forEach(r => {
        const a=_aArea(r), l=_aLoc(r);
        if (!locsByArea[a]) locsByArea[a]=new Set();
        locsByArea[a].add(l);
      });
      const hmAreas = areaSorted.slice(0,8);
      const hmLocs  = [...new Set(primRows.map(_aLoc))].sort().slice(0,8);
      const maxHeat = Math.max(...hmAreas.map(a=>Math.max(...hmLocs.map(l=>primRows.filter(r=>_aArea(r)===a&&_aLoc(r)===l).length),0)),1);

      const hmContainer = document.getElementById('areaHeatmapContainer');
      if (hmContainer) {
        const heatColor = n => {
          if (n===0) return '#f8faff';
          const ratio = n/maxHeat;
          if (ratio>0.7) return '#dc2626';
          if (ratio>0.4) return '#f59e0b';
          if (ratio>0.15) return '#fef3c7';
          return '#d1fae5';
        };
        const textClr = n => n/maxHeat > 0.5 ? '#fff' : '#1e293b';

        let html = '<table class="table table-bordered mb-0" style="font-size:0.7rem;min-width:350px"><thead><tr>' +
          '<th style="background:#1e293b;color:#fff;padding:5px 8px;white-space:nowrap">Area \\ Location</th>' +
          hmLocs.map(l=>'<th style="background:#1e293b;color:#fff;padding:5px 6px;max-width:70px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="'+l+'">'+String(l).slice(0,10)+'</th>').join('') +
          '<th style="background:#374151;color:#fff;padding:5px 8px">Total</th></tr></thead><tbody>';

        hmAreas.forEach(a => {
          const rowTotal = primRows.filter(r=>_aArea(r)===a).length;
          html += '<tr><td style="font-weight:700;white-space:nowrap;padding:5px 8px;background:#f1f5f9">'+a+'</td>';
          hmLocs.forEach(l => {
            const n = primRows.filter(r=>_aArea(r)===a&&_aLoc(r)===l).length;
            html += '<td style="background:'+heatColor(n)+';color:'+textClr(n)+';text-align:center;font-weight:'+(n>0?'700':'400')+';padding:4px 5px;cursor:'+(n>0?'pointer':'default')+'" '+
              (n>0?'onclick="openAreaPhotoModal(\''+a+'\',\''+l+'\',null,true)"':'')+
              ' title="'+a+' × '+l+': '+n+' errors">'+(n||'')+'</td>';
          });
          html += '<td style="font-weight:700;text-align:center;background:#e0f2fe;padding:4px 6px">'+rowTotal+'</td></tr>';
        });
        html += '</tbody></table>';
        if (hmLocs.length === 0) html = '<div class="text-muted p-3">ไม่มีข้อมูล Location</div>';
        hmContainer.innerHTML = html;
      }

      // ── Chart 5: QTY by Area (Primary vs Comparison) ─────────────
      const qtyByAreaP = {}, qtyByAreaC = {};
      primRows.forEach(r=>{const a=_aArea(r);qtyByAreaP[a]=(qtyByAreaP[a]||0)+_aQty(r);});
      compRows.forEach(r=>{const a=_aArea(r);qtyByAreaC[a]=(qtyByAreaC[a]||0)+_aQty(r);});
      const qSorted = areaSorted;
      _destroyAC('units');
      const ctxU = document.getElementById('areaErrorUnitsChart')?.getContext('2d');
      if (ctxU) {
        const qDS = [{label:'QTY Primary', data:qSorted.map(a=>qtyByAreaP[a]||0), backgroundColor:'rgba(124,58,237,0.7)', borderRadius:4}];
        if (hasComp) qDS.push({label:'QTY Comparison ('+fComp+')', data:qSorted.map(a=>qtyByAreaC[a]||0), backgroundColor:'rgba(124,58,237,0.3)', borderRadius:4});
        _aC['units'] = createChart(ctxU, {
          type:'bar', data:{labels:qSorted, datasets:qDS},
          options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',
            scales:{x:{beginAtZero:true}},
            plugins:{legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}}}
          }
        });
      }

      // ── Chart 6: Monthly Dual — Cases + QTY (Primary vs Comparison) ─
      const mCasesP = trendMonths.map(m=>primRows.filter(r=>_aMk(_aDate(r))===m).length);
      const mQtyP   = trendMonths.map(m=>primRows.filter(r=>_aMk(_aDate(r))===m).reduce((s,r)=>s+_aQty(r),0));
      const mCasesC = hasComp ? trendMonths.map(m=>compRows.filter(r=>_aMk(_aDate(r))===m).length) : [];
      const mQtyC   = hasComp ? trendMonths.map(m=>compRows.filter(r=>_aMk(_aDate(r))===m).reduce((s,r)=>s+_aQty(r),0)) : [];

      _destroyAC('dual');
      const ctxD = document.getElementById('areaMonthlyDualChart')?.getContext('2d');
      if (ctxD) {
        const dDS = [
          {type:'bar',  label:'Cases Primary', data:mCasesP, backgroundColor:'rgba(29,78,216,0.7)', borderRadius:4, yAxisID:'y', order:3},
          {type:'line', label:'QTY Primary',   data:mQtyP,   borderColor:'#dc2626', borderWidth:2.5, pointRadius:5, pointBackgroundColor:'#dc2626', fill:false, tension:0.35, yAxisID:'y1', order:1},
        ];
        if (hasComp) {
          dDS.push({type:'bar',  label:'Cases Comp ('+fComp+')', data:mCasesC, backgroundColor:'rgba(124,58,237,0.35)', borderRadius:4, yAxisID:'y', order:2});
          dDS.push({type:'line', label:'QTY Comp ('+fComp+')',   data:mQtyC,   borderColor:'#7c3aed', borderWidth:1.5, borderDash:[5,4], pointRadius:3, pointBackgroundColor:'#7c3aed', fill:false, tension:0.35, yAxisID:'y1', order:1});
        }
        _aC['dual'] = createChart(ctxD, {
          type:'bar', data:{labels:trendMonths, datasets:dDS},
          options:{responsive:true,maintainAspectRatio:false,
            interaction:{mode:'index',intersect:false},
            scales:{
              y:{beginAtZero:true,ticks:{stepSize:1},title:{display:true,text:'Cases'},position:'left'},
              y1:{beginAtZero:true,title:{display:true,text:'QTY'},position:'right',grid:{drawOnChartArea:false}}
            },
            plugins:{legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}}}
          }
        });
      }

      // ── Detail Table ─────────────────────────────────────────────
      const detailRows = [...primRows].sort((a,b) => _aDate(b).localeCompare(_aDate(a))).slice(0,100);
      const tbody = document.getElementById('areaDetailBody');
      const countEl = document.getElementById('areaDetailCount');
      if (countEl) countEl.textContent = primRows.length + ' records' + (hasComp ? ' | Comparison: '+compRows.length : '');
      if (tbody) {
        tbody.innerHTML = detailRows.length ? detailRows.map(r => {
          const photos = _aPhotos(r);
          // Photo icons: แต่ละ icon = 1 รูป กดเปิด Drive โดยตรง
          const allLinks = [r[10],r[11],r[12],r[13]];
          const hasAny   = allLinks.some(v => v && String(v).startsWith('http'));
          const camBtn   = hasAny
            ? allLinks.map((url, pi) =>
                url && String(url).startsWith('http')
                  ? '<a href="'+url+'" target="_blank" rel="noopener" title="Photo '+(pi+1)+'" '+
                    'style="display:inline-flex;align-items:center;justify-content:center;'+
                    'width:26px;height:26px;border-radius:6px;background:#0891b2;color:#fff;'+
                    'text-decoration:none;margin:1px;font-size:.75rem">'+
                    '<i class=\"bi bi-camera-fill\"></i></a>'
                  : '<span title="ไม่มีรูป '+(pi+1)+'" '+
                    'style="display:inline-flex;align-items:center;justify-content:center;'+
                    'width:26px;height:26px;border-radius:6px;background:#f1f5f9;color:#cbd5e1;margin:1px;font-size:.75rem">'+
                    '<i class=\"bi bi-camera\"></i></span>'
              ).join('')
            : '<span style="color:#94a3b8;font-size:.78rem">—</span>'
          return '<tr>' +
            '<td style="font-size:.78rem;white-space:nowrap">'+_aDate(r)+'</td>' +
            '<td style="font-size:.78rem;font-weight:600">'+_aArea(r)+'</td>' +
            '<td style="font-size:.78rem">'+_aLoc(r)+'</td>' +
            '<td style="font-size:.78rem;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="'+_aProb(r)+'">'+_aProb(r)+'</td>' +
            '<td style="font-size:.78rem;text-align:center;font-weight:700;color:#7c3aed">'+(_aQty(r)||'—')+'</td>' +
            '<td>'+camBtn+'</td></tr>';
        }).join('') : '<tr><td colspan="6" class="text-center py-3 text-muted">ไม่มีข้อมูลตาม filter</td></tr>';
      }
    }
    // END renderAreaTrend

   // ── Photo Modal & Export (Unified Version) ──────────────────────────────────────────────────
    function openAreaPhotoModal(areaKey, probOrLoc, rowData, isByLoc) {
      const all = _getAreaRows();
      let targetRows;
      if (rowData && Array.isArray(rowData)) {
        targetRows = [rowData];
      } else if (isByLoc) {
        targetRows = all.filter(r => _aArea(r)===areaKey && _aLoc(r)===probOrLoc);
      } else {
        targetRows = all.filter(r => _aArea(r)===areaKey && _aProb(r)===probOrLoc);
      }
      const modal = document.getElementById('areaPhotoModal'), title = document.getElementById('areaPhotoModalTitle'), info = document.getElementById('areaPhotoModalInfo'), links = document.getElementById('areaPhotoModalLinks');
      if (!modal) return;
      title.textContent = '📍 '+(isByLoc?'Location: ':'')+(probOrLoc||areaKey);
      info.innerHTML = targetRows.map(r => '<div style="margin-bottom:6px;padding-bottom:6px;border-bottom:1px solid #e2e8f0"><b>'+_aDate(r)+'</b> | Area: <b>'+_aArea(r)+'</b> | Location: <b>'+_aLoc(r)+'</b> | Problem: '+_aProb(r)+(_aQty(r)>0?' | QTY: <b style="color:#7c3aed">'+_aQty(r)+'</b>':'')+'</div>').join('');
      const allPhotos = targetRows.flatMap(_aPhotos);
      if (allPhotos.length) {
        links.innerHTML = allPhotos.map((url,i) => `<a href="${url}" target="_blank" rel="noopener" style="display:inline-block; margin: 0 8px 8px 0; border-radius: 8px; overflow: hidden; border: 2px solid #e2e8f0; box-shadow: 0 3px 6px rgba(0,0,0,0.15); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"><img src="${url}" style="height: 150px; min-width: 100px; max-width: 100%; object-fit: cover; display: block;" alt="Photo ${i+1}"></a>`).join('');
      } else { links.innerHTML = '<span class="text-muted">ไม่มีรูปภาพในรายการนี้</span>'; }
      modal.style.display = 'block';
    }

    function closeAreaPhotoModal() { const m = document.getElementById('areaPhotoModal'); if (m) m.style.display = 'none'; }

    function exportAreaTrendCSV() {
      const rows = _getAreaRows(); if (!rows.length) { alert('ไม่มีข้อมูล'); return; }
      const hdr = ['Date','Month','Area','Location','Problem','QTY','Photo1','Photo2','Photo3','Photo4'];
      const csv = [hdr,...rows.map(r=>[_aDate(r),_aMk(_aDate(r)),_aArea(r),_aLoc(r),_aProb(r),_aQty(r),r[10]||'',r[11]||'',r[12]||'',r[13]||''])].map(row=>row.map(c=>'"'+String(c||'').replace(/"/g,'""')+'"').join(',')).join('\n');
      const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
      const url=URL.createObjectURL(blob); const a=document.createElement('a');
      a.href=url; a.download='Area_'+new Date().toISOString().slice(0,10)+'.csv';
      document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    }
    
    function renderSummaryCharts(selectedMonth) {
      const typeNow = (selectedTypeFilter && selectedTypeFilter !== 'ALL') ? selectedTypeFilter : 'Checklist';
      const deptNow = (selectedDeptFilter && selectedDeptFilter !== 'ALL') ? selectedDeptFilter : 'ALL';
      if (!reportData?.checked?.dccData?.length) return;
      const data = reportData.checked.dccData;
      function normT(t){ t=(t||'').trim(); return t==='PM/WI'?'PMWI':t; }
      function mkSort(mk){ const mm={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}; const p=(mk||'').split('-'); return (2000+parseInt(p[1]||0))*12+(mm[p[0]]||0); }
      const rows = data.filter(r => { const t=normT(r[5]||''), d=(r[6]||'').trim(); return (typeNow==='ALL'||t===typeNow) && (deptNow==='ALL'||d===deptNow); });
      const allMonths = [...new Set(rows.map(r=>(r[1]||'').trim()).filter(Boolean))].sort((a,b)=>mkSort(a)-mkSort(b));
      const byMonth = {}; rows.forEach(r=>{ const mk=(r[1]||'').trim(); if(!mk)return; if(!byMonth[mk]) byMonth[mk]={units:0,errors:0,depts:new Set()}; byMonth[mk].units += parseFloat(r[10])||0; byMonth[mk].errors += parseFloat(r[11])||0; byMonth[mk].depts.add((r[6]||'').trim()); });
      const selM = selectedMonth || allMonths[allMonths.length-1] || '';
      const byDept = {}; rows.filter(r=>(r[1]||'').trim()===selM).forEach(r=>{ const d=(r[6]||'').trim()||'Unknown'; if(!byDept[d]) byDept[d]={units:0,errors:0}; byDept[d].units += parseFloat(r[10])||0; byDept[d].errors += parseFloat(r[11])||0; });
      const last6 = allMonths.slice(-6);
      const byDeptMonth = {}; rows.forEach(r=>{ const d=(r[6]||'').trim()||'Unknown', mk=(r[1]||'').trim(); if(!last6.includes(mk))return; if(!byDeptMonth[d]) byDeptMonth[d]={}; if(!byDeptMonth[d][mk]) byDeptMonth[d][mk]={units:0,errors:0}; byDeptMonth[d][mk].units += parseFloat(r[10])||0; byDeptMonth[d][mk].errors += parseFloat(r[11])||0; });
      const pal = ['#1d4ed8','#7c3aed','#0891b2','#059669','#d97706','#be185d','#0369a1','#4f46e5'];
      const TARGET = 2;

      // Charts Execution
      try { renderPresentationKPIs(rows, selM, allMonths, byMonth); } catch(e) {}
      try { renderParetoChart(rows, selM); } catch(e) {}
      try { renderWeeklyTrend(rows, selM); } catch(e) {}
      try { renderRadarScorecard(rows, selM); } catch(e) {}
      try { renderFuncBreakdown(rows, selM); } catch(e) {}
      try { renderSubFuncHeatmap(rows, selM); } catch(e) {}

      // AI Logic
      try {
        const prevM = allMonths[allMonths.indexOf(selM)-1];
        const errTypeCnt = {}; rows.filter(r=>(r[1]||'').trim()===selM).forEach(r=>{ [r[12],r[13],r[14],r[15],r[16]].forEach(v=>{ const s=(v||'').toString().trim(); if(s) errTypeCnt[s]=(errTypeCnt[s]||0)+1; }); });
        const topErr = Object.entries(errTypeCnt).sort((a,b)=>b[1]-a[1])[0];
        const deptSortedForAction = Object.entries(byDept).map(([d,v])=>({d, rate:v.units>0?+(v.errors/v.units*100).toFixed(2):0})).sort((a,b)=>b.rate-a.rate);
        const worstDept = deptSortedForAction[0];
        const smartPanel = document.getElementById('smartActionsPanel');
        if (smartPanel && rows.length > 0) {
          let actionsHtml = `<div style="background:linear-gradient(135deg, #1e3a8a, #1d4ed8); padding: 18px; border-radius: 12px; color: white; box-shadow: 0 4px 12px rgba(29,78,216,0.2);"><h6 style="font-weight: 800; margin-bottom: 12px; letter-spacing: 0.5px;"><i class="bi bi-robot me-2"></i>AI Action Items</h6><ul style="margin: 0; padding-left: 20px; line-height: 1.6; font-size: 0.85rem;">`;
          if (worstDept && worstDept.rate > TARGET) { actionsHtml += `<li><b>สั่งการแผนก ${worstDept.d}:</b> Error Rate สูงถึง <span style="color:#fca5a5; font-weight:bold;">${worstDept.rate}%</span></li>`; }
          if (topErr) { actionsHtml += `<li><b>ทบทวน WI:</b> ปัญหาพบบ่อยที่สุดคือ <b>"${topErr[0]}"</b></li>`; }
          actionsHtml += `</ul></div>`; smartPanel.innerHTML = actionsHtml;
        }
      } catch(e) { console.warn("Action Items Error:", e); }
    }

</script>
</body>
</html>
