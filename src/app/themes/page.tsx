import { ThemeSwitcher } from "./_components/ThemeSwitcher";

const ThemesPage: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <ThemeSwitcher />
      <div className="bg-header-background p-4 text-white">Header</div>
      <div className="bg-status-great p-4 text-white">Great</div>
      <div className="bg-status-opportunity p-4 text-white">Opportunity</div>
      <div className="bg-status-big-opportunity p-4 text-white">
        Big opportunity
      </div>
      <div className="bg-status-focus-on p-4 text-white">Focus On</div>
      <div className="bg-status-none p-4 text-white">None</div>
      <ColorGridStatic />
    </div>
  );
};

const ColorGridStatic: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-6">
      {/* Column 1: Solid Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Solid Colors</h2>

        <div className="w-full h-12 rounded-lg bg-solid-dark text-white flex items-center justify-center">
          Dark
        </div>

        <div className="w-full h-12 rounded-lg bg-solid-gray text-white flex items-center justify-center">
          Gray
        </div>

        <div className="w-full h-12 rounded-lg bg-solid-green text-white flex items-center justify-center">
          Green
        </div>

        <div className="w-full h-12 rounded-lg bg-solid-blue text-white flex items-center justify-center">
          Blue
        </div>

        <div className="w-full h-12 rounded-lg bg-solid-red text-white flex items-center justify-center">
          Red
        </div>

        <div className="w-full h-12 rounded-lg bg-solid-yellow text-white flex items-center justify-center">
          Yellow
        </div>
      </div>

      {/* Column 2: Soft Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Soft Colors</h2>

        <div className="w-full text-sm flex flex-col p-2 rounded-lg bg-soft-dark-bg  border  border-soft-dark-border">
          <div className="text-soft-dark-text font-semibold">Dark Soft</div>
          <div className="text-soft-dark-muted-text">Muted Dark Soft</div>
        </div>

        <div className="w-full text-sm flex flex-col p-2 rounded-lg bg-soft-gray-bg  border  border-soft-gray-border">
          <div className="text-soft-gray-text font-semibold">Gray Soft</div>
          <div className="text-soft-gray-muted-text">Muted Gray Soft</div>
        </div>

        <div className="w-full text-sm flex flex-col p-2 rounded-lg bg-soft-green-bg  border  border-soft-green-border">
          <div className="text-soft-green-text font-semibold">Green Soft</div>
          <div className="text-soft-green-muted-text">Muted Green Soft</div>
        </div>

        <div className="w-full text-sm flex flex-col p-2 rounded-lg bg-soft-blue-bg  border  border-soft-blue-border">
          <div className="text-soft-blue-text font-semibold">Blue Soft</div>
          <div className="text-soft-blue-muted-text">Muted Blue Soft</div>
        </div>

        <div className="w-full text-sm flex flex-col p-2 rounded-lg bg-soft-red-bg  border  border-soft-red-border">
          <div className="text-soft-red-text font-semibold">Red Soft</div>
          <div className="text-soft-red-muted-text">Muted Red Soft</div>
        </div>

        <div className="w-full text-sm flex flex-col p-2 rounded-lg bg-soft-yellow-bg  border  border-soft-yellow-border">
          <div className="text-soft-yellow-text font-semibold">Yellow Soft</div>
        </div>
      </div>
    </div>
  );
};

export default ThemesPage;
