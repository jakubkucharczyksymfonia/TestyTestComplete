//USEUNIT DATA


TestedApps.Administracja.Run();
Delay(1000);


function create_Base()
{
    
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Administracja|Lista firm");
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.ConfiguredFirmsMasterControl").WinFormsObject("ConfiguredFirmsMasterControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Utwórz firmę");
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUserServerCtrl").WinFormsObject("groupBoxServer").WinFormsObject("dbServerDropCtrl").WinFormsObject("serverTextBox").set_Text(sqlName);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUserServerCtrl").WinFormsObject("groupBoxUser").WinFormsObject("panel").WinFormsObject("userCtrl").WinFormsObject("flowLayoutPanel").WinFormsObject("sdcPanelUser").WinFormsObject("textBoxUser").set_Text(sqlUser);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUserServerCtrl").WinFormsObject("groupBoxUser").WinFormsObject("panel").WinFormsObject("userCtrl").WinFormsObject("flowLayoutPanel").WinFormsObject("sdcPanelPassword").WinFormsObject("textBoxPassword").set_Text(sqlPass);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click();
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("NewDBCtrl").WinFormsObject("sdcGroupBox1").WinFormsObject("dbNewCtrl").WinFormsObject("_textBoxDBName").set_Text("Baza_test")
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click();

  
 
  while (Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WaitWinFormsObject("NewDBCtrl", 500).Exists) 
    {         
    Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("NewDBCtrl").WinFormsObject("sdcGroupBox1").WinFormsObject("dbNewCtrl").WinFormsObject("_textBoxDBName").set_Text(baseName + "_" + baseNumb++)
  
    Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click()
    }
   
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUsersCtrl").WinFormsObject("groupBoxAll").WinFormsObject("dbUserCtrl").WinFormsObject("flowLayoutPanel").WinFormsObject("sdcPanelUser").WinFormsObject("textBoxUser").set_Text(sqlUser);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUsersCtrl").WinFormsObject("groupBoxAll").WinFormsObject("dbUserCtrl").WinFormsObject("flowLayoutPanel").WinFormsObject("sdcPanelPassword").WinFormsObject("textBoxPassword").set_Text(sqlPass);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click();
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUsersCtrl").WinFormsObject("groupBoxAll").WinFormsObject("dbUserCtrl").WinFormsObject("flowLayoutPanel").WinFormsObject("sdcPanelUser").WinFormsObject("textBoxUser").set_Text(sqlUser);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("DBUsersCtrl").WinFormsObject("groupBoxAll").WinFormsObject("dbUserCtrl").WinFormsObject("flowLayoutPanel").WinFormsObject("sdcPanelPassword").WinFormsObject("textBoxPassword").set_Text(sqlPass);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click();
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("ForteAdminCtrl").WinFormsObject("groupBoxUser").WinFormsObject("_textBoxUser").set_Text(baseUser);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("ForteAdminCtrl").WinFormsObject("groupBoxUser").WinFormsObject("_textBoxPassword").set_Text(basePass);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("ForteAdminCtrl").WinFormsObject("groupBoxUser").WinFormsObject("_textBoxPasswordRepeat").set_Text(basePass);
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click();
  
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click();
 
}

function wait_creation()
{
  var Guzik = Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext")
 
  if (Guzik.WaitProperty("Enabled", true, 300000))
  Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcBottomPanel").WinFormsObject("sdcButtonNext").Click()
 }
 

//function check_if_correct()
//{
//  var postep = Sys.Process("Administracja").WinFormsObject("CreateFirmWizardForm").WinFormsObject("_wizardCtrl").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcMainPanel").WinFormsObject("CreateCompanyCtrl").WinFormsObject("progressCtrl").WinFormsObject("sdcTableLayoutPanel2").WinFormsObject("sdcTableLayoutPanel3").WinFormsObject("sdcGroupBox3").WinFormsObject("sdcPanelTech").WinFormsObject("sdcTreeViewTech").Find("contentText","Firma została utworzona", 1000);
//  if (postep.exist)
//  Log.Message("utworzona poprawnie");
//  else
//  Log.Message("blad tworzenia");
//}


function open_Base()
{
//var currentbasename = "dupadupa"
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Firma|Otwórz firmę");
 // Sys.Process("Administracja").WPFObject("HwndSource: SageDialog", "").WPFObject("SageDialog", "", 1).WPFObject("StackPanel", "", 1).WPFObject("ContentControl", "", 1).WPFObject("LogInView", "", 1).WPFObject("ContentControl", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ComboBoxEdit", "", 1).Click();
  // Sys.Process("Administracja").WPFObject("HwndSource: SageDialog", "").WPFObject("SageDialog", "", 1).WPFObject("StackPanel", "", 1).WPFObject("ContentControl", "", 1).WPFObject("LogInView", "", 1).WPFObject("ContentControl", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ComboBoxEdit", "", 1).SetText(currentbasename);
}

function login_ADM()
{
 
    Sys.Process("Administracja").WPFObject("HwndSource: SageDialog", "").WPFObject("SageDialog", "", 1).WPFObject("StackPanel", "", 1).WPFObject("ContentControl", "", 1).WPFObject("LogInView", "", 1).WPFObject("ContentControl", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("PasswordBoxEdit", "", 1).set_Text(basePass);
    
    Sys.Process("Administracja").WPFObject("HwndSource: SageDialog", "").WPFObject("SageDialog", "", 1).WPFObject("StackPanel", "", 1).WPFObject("ContentControl", "", 1).WPFObject("LogInView", "", 1).WPFObject("ContentControl", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ItemsControl", "", 1).WPFObject("Button", "Zaloguj", 1).ClickButton();
   
}

function company_data()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").Maximize()
  
  if(Sys.Process("Administracja").WaitWPFObject("HwndSource: root", 3000).Exists)
    {
    Sys.Process("Administracja").WPFObject("HwndSource: root").Close()
    }
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Firma|Dane firmy");
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DockPanel", "", 1).WPFObject("Button", "Edytuj", 4).ClickButton()
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("GroupBox", "Dane firmy", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 3).wText = baseName
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("GroupBox", "Dane firmy", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 4).wText = "Weryfikacja JKu Sp z. o o.";
    
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("GroupBox", "Dane firmy", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 5).wText = "4728076300";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 1).wText = "Tomcia Palucha";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 2).wText = "35";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 3).wText = "46";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 4).wText = "02-496";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 5).wText = "Warszawa";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 6).wText = "Mazowieckie";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 7).wText = "Polska";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 8).wText = "Warszawa";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DXTabControl", "", 1).WPFObject("FastRenderPanelContentPresenter", "", 1).WPFObject("CompanyAddressControl", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 9).wText = "Warszawa";
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").WinFormsObject("SdcMasterControl").WinFormsObject("ElementHost", "", 1).WPFObject("HwndSource: AdornerDecorator", "").WPFObject("AdornerDecorator", "", 1).WPFObject("AvalonAdapter", "", 1).WPFObject("CompanyDataControl", "", 1).WPFObject("Grid", "", 1).WPFObject("DockPanel", "", 1).WPFObject("Button", "Zapisz", 5).ClickButton()
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").Restore()
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Subjects.UI.Company.NewCompanyData").Close()
}

function permissions_set()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Administracja|Użytkownicy");
  

  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").Keys("~w")

  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").Keys("[Space][Right]")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").Keys("[Space][Right]")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").Keys("[Space][Right]")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").Keys("[Space][Right]")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").Keys("[Space][Right]")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Zestawy praw dla użytkownika").set_Visible(true)
    
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Zestawy praw dla użytkownika").WinFormsObject("SdcMasterGrid").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Edytuj")

  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Zestawy praw dla użytkownika").WinFormsObject("SdcMasterGrid").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Wszystko")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Zestawy praw dla użytkownika").WinFormsObject("SdcMasterGrid").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Zapisz")
}

function permissions_efective()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa efektywne").set_Visible(true)
      
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa efektywne").WinFormsObject("SdcManagedControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Edytuj")

  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa efektywne").WinFormsObject("SdcManagedControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Wszystko")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa efektywne").WinFormsObject("SdcManagedControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Zapisz")
}  

function permissions_modules()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa do modułów").set_Visible(true)
     
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa do modułów").WinFormsObject("SdcManagedControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Edytuj")

  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa do modułów").WinFormsObject("SdcManagedControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Wszystko")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").WinFormsObject("SdcMasterDetailControl2").WinFormsObject("m_TabControl").WinFormsObject("SdcTabPage", "&Prawa do modułów").WinFormsObject("SdcManagedControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Zapisz")
}   

function close_user_control()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcUsersControl").Close()
}

function pass_Policy()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Administracja")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").Keys("[Down][Down][Down][Enter]")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcPwdPolicyOptionsControl").WinFormsObject("SdcPwdPolicyOptionsControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Edytuj")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcPwdPolicyOptionsControl").WinFormsObject("SdcPwdPolicyOptionsControl").WinFormsObject("sdcPwdPolicyOptions1").WinFormsObject("sdcGroupBox").WinFormsObject("sdcTableLayoutPanel").WinFormsObject("sdcListView").Keys(" [Down] [Down][Down] [Down] [Down] ")
  
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcPwdPolicyOptionsControl").WinFormsObject("SdcPwdPolicyOptionsControl").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Zapisz")
    
  Sys.Process("Administracja").WinFormsObject("SdcMessageBox").WinFormsObject("sdcMessageBoxControl1").WinFormsObject("sdcButton1").Click()
    
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("MdiClient", "").WinFormsObject("FormSymfonia.Common.Users.UI.SdcPwdPolicyOptionsControl").Close()
}

function closeCompany()
{
  Sys.Process("Administracja").WinFormsObject("FormMain").WinFormsObject("BarDockControl", "", 5).WinFormsObject("DockedBarControl", "").ClickItem("Firma|Zamknij firmę")  
}




